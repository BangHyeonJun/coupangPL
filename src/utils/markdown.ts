import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Get file names under /posts
    let fileNames = fs.readdirSync(postsDirectory);

    const regex = RegExp('/*.md');
    fileNames = fileNames.filter(fileName => {
        return regex.test(fileName);
    });

    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\/*.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date
    return allPostsData.sort((a: any, b: any) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export function getPost(id) {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.filter(fileName => {
        // Remove ".md" from file name to get id
        const fid = fileName.replace(/\.md$/, '');
        if (id === fid) return true;
        else return false;
    });

    if (allPostsData.length !== 1)
        return {
            status: 'error',
        };

    const fileName = allPostsData[0];

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
        id: id,
        content: matterResult.content,
        title: matterResult.data.title,
        date: matterResult.data.date,
        thumnail: matterResult.data.thumnail,
        status: 'success',
    };
}
