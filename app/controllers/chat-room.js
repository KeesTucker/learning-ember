import Controller from '@ember/controller';
import moment from 'moment-timezone';

export default class ChatRoomController extends Controller {
    newComment = "";

    async send() {
        // Get the comment text from the input
        let comment = this.get('newComment');

        let data = { comment: comment };

        // Send the POST request to the server
        let response = await fetch('http://158.140.234.64:1313/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Handle the response
        if (response.ok) {
            console.log('Comment posted successfully');
        } else {
            console.error('Error posting comment');
        }

        this.pullComments();
    }

    async pullComments() {
        // Make the get request to pull new comments
        let response = await fetch('http://158.140.234.64:1313/comments');
        let data = await response.json();

        // TODO: This should be extracted to a method but i do not have time.
        // Format the time for each comment
        data = data.map(comment => {
            comment._time = moment(comment._time).format("DD/MM/YY, h:mm:ss a");
            return comment;
        });

        // Set the comments in the controller
        this.set('model.comments', data.reverse());

        console.log('pulled');
    }
}