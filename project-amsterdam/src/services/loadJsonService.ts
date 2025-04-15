import { Schema } from '../types/Schema';

const jsonFilePath = '/json/content.json';

export const loadJsonData = async ():Promise<Schema | null> => {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error('File not found');
        }
        return await response.json();
    } catch (error) {
        console.error('Error while loading file:', error);
        return null
    }
};