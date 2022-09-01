import { StackUpController } from ".";

(() => {
    StackUpController.getEvent().then(console.log);
    StackUpController.getTeam().then(console.log);
    StackUpController.getParticipant().then(console.log);
})();