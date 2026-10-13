import fs from 'node:fs/promises';
import path from 'node:path';

async function countCsvFiles(folderPath) {
    try {
        const files = await fs.readdir(folderPath, {
            withFileTypes: true
        });

        const csvFiles = files.filter(file =>
            file.isFile() &&
            path.extname(file.name).toLowerCase() === '.csv'
        );

        console.log('Total CSV files:', csvFiles.length);

        return csvFiles.length;
    } catch (error) {
        console.error('Error reading folder:', error.message);
        return 0;
    }
}

countCsvFiles('./data');