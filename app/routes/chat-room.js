import Route from '@ember/routing/route';

export default class ChatRoomRoute extends Route {
  async model() {
    // Make a request to the API
    let response = await fetch('http://192.168.1.3:1313/comments');
    let data = await response.json();
    // Return the data
    return { comments: data };
  }
}