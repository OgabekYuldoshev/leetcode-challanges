// 1233. Remove Sub-Folders from the Filesystem
// Submission: https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/submissions/1433341753/?envType=daily-question&envId=2024-10-24

function removeSubfolders(folder: string[]): string[] {
    const folders = folder.sort((a, b) => a.localeCompare(b));

    if (!folders.length) {
        return []
    }

    const result: string[] = [folders[0]];

    for (let i = 1; i < folders.length; i++) {
        const lastFolder = `${result[result.length - 1]}/`

        if (!folders[i].startsWith(lastFolder)) {
            result.push(folders[i])
        }
    }

    return result
};

console.log(removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"]));