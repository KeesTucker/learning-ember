import Route from '@ember/routing/route';
import moment from 'moment-timezone';
import { inject as controller } from '@ember/controller';

export default class ChatRoomRoute extends Route {
    controller = controller('chat-room');

    async model() {
        // Make a request to the API
        let response = await fetch('http://localhost:1313/comments');
        let data = await response.json();

        // Format the time for each comment
        data = data.map(comment => {
            comment._time = moment(comment._time).format("DD/MM/YY, h:mm:ss a");
            return comment;
        });

        // Return the data
        return { comments: data.reverse() };
    }

    // Put this here because lifecycle events wern't being called in the controller? HMMMMM. DISGUSTING
    activate() {
        this._super(...arguments);
        // Yeah I'm a bit lost, but it works
        var controllerRef = this.controllerFor('chat-room');
        setInterval(async () => controllerRef.pullComments(), 3000);
    }
}