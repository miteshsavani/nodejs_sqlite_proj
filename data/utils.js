import fs from 'fs-extra';
import path from 'path';

const loadSqlQueries = async (folderName) => {

    const filePath = path.join(process.cwd(), 'data', folderName);
    const allFiles = await fs.readdir(filePath);
    const sqlFiles = allFiles.filter(file => file.endsWith('.sql'));
    
    const queries = {};

    for (const sqlFile of sqlFiles) {
        const query = await fs.readFileSync(path.join(filePath, sqlFile), {encoding: 'utf-8'});
        queries[sqlFile.replace('.sql', '')] = query;
    }

    return queries;

}

export default loadSqlQueries;