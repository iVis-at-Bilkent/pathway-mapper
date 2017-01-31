module.exports = (function ()
{

    function ChatManager()
    {
        //Create socket io socked instance
        this.socket = io();

        this.NEW_MESSAGE_EMITTED_EVENT = "newMessage";
        this.USER_JOINED_EVENT = "userJoined";
        this.USER_DISCONNECTED_EVENT = "disconnect";

        //Tests
        this.socket.emit(this.USER_JOINED_EVENT, "istemi");
        this.socket.emit(this.NEW_MESSAGE_EMITTED_EVENT, "hello");

        this.initializeSocketHandlers();
    };

    ChatManager.prototype.initializeSocketHandlers = function()
    {
        this.socket.on(this.NEW_MESSAGE_EMITTED_EVENT, this.newMessageEmitHandler);
        this.socket.on(this.USER_JOINED_EVENT, this.userJoinedEmitHandler);
        this.socket.on(this.USER_DISCONNECTED_EVENT, this.userDisconnectedEmitHandler);
    };

    /*******************************
     Handlers
     ********************************/
    ChatManager.prototype.newMessageEmitHandler = function(data)
    {
        console.log(data);
    };

    ChatManager.prototype.userJoinedEmitHandler = function(data)
    {
        console.log(data);
    };

    ChatManager.prototype.userDisconnectedEmitHandler = function(data)
    {
        console.log(data);
    };


    return ChatManager;
})();
