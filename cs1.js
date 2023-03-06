// CloudScript (JavaScript)
handlers.helloWorld = function (args, context) {
    var message = "Hello " + currentPlayerId + "!";
    log.info(message);
    var inputValue = null;
    if (args && args.hasOwnProperty("inputValue"))
        inputValue = args.inputValue;
    log.debug("helloWorld:", { input: inputValue });
    return { messageValue: message };
}


 handlers.dailyRewardPos1 = function (args, context) 
 {
     var getPlayerInfo = server.GetUserData
         ({
             PlayFabId: currentPlayerId,
             Keys: ["PlayerData"]
         });
     log.info(getPlayerInfo);      
     var myObject = getPlayerInfo.Data.PlayerData.Value;
     log.info(myObject);

     var itemToUpdate = myObject[22] + 1;
     log.info(itemToUpdate);

     myObject[22] = itemToUpdate;
     log.info(myObject);
    //  var Update = server.UpdateUserData
    //      ({
    //          "PlayFabId": currentPlayerId,
    //          "Data": itemToUpdate 
    //      });
            
 }