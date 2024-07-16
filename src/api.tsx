import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL || ""
const API_KEY = process.env.REACT_APP_API_KEY|| ""

export const summarizeText = async (text:string) : Promise<String> =>{

    const data = {
        contents: [{
            parts: [{
                text: `Summarize the following text: ${text}`
            }]
        }]
    };

    try {
        const res = await axios.post(API_URL, data, {
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': API_KEY
            },
        });

        const summary = res.data.candidates[0].content.parts[0].text;
        return summary;
    } catch (error) {
        console.log(error);
        throw new Error('Error to failed summary')
    }
}