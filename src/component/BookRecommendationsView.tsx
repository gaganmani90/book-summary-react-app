import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
interface BookRecommendation {
    title: string;
    author: string;
}

const parseChatGPTResponse = (response: string): BookRecommendation[] => {
    const bookRecommendations: BookRecommendation[] = [];
    const lines = response.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();


        if (line) {
            const parts = line.split(' by ');
            console.log(`parts: ${parts.length}`)
            if (parts.length === 2) {
                const title = parts[0].replace(/^\d+\.\s*/, '');
                const author = parts[1];
                bookRecommendations.push({ title, author });
            }
        }
    }
    return bookRecommendations;
};

const BookRecommendationsView = (props: { response: string; }) => {
    const bookList = parseChatGPTResponse(props.response)
    console.log(`response: ${props.response}, parsed ${JSON.stringify(bookList)}`)
    return (
        <div>
            <h2>Top 5 Book Recommendations:</h2>
            <ListGroup>
                    <ListGroup.Item key="1">{props.response}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default BookRecommendationsView;
