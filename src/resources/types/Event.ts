export class Event {
    name: string;
    eventID: number;
    startDateUTC: string;
    endDateUTC: string;
    numDonations: number;
    sumDonations: number;
    fundraisingGoal: number;
    numParticipants: number;
    numTeams: number;
    registerURL: string;
    donateURL: string;
    pageURL: string;
    avatarImage: string;
    publishDateUTC: string;
    donCutoffDateUTC: string;
    timeZone: string;
    type: string;
    hasDates: boolean;
    regCutoffDateUTC: string;
    hasLocation: boolean;
    avatarImageURL: string;

    constructor(event: { [key: string]: any }) {
        this.fundraisingGoal = event.fundraisingGoal;
        this.numParticipants = event.numParticipants;
        this.numTeams = event.numTeams;
        this.registerURL = event.links.register;
        this.donateURL = event.links.donate;
        this.pageURL = event.links.page;
        this.avatarImage = event.avatarImage;
        this.publishDateUTC = event.publishDateUTC;
        this.donCutoffDateUTC = event.donCutoffDateUTC;
        this.timeZone = event.timeZone;
        this.type = event.type;
        this.hasDates = event.hasDates;
        this.regCutoffDateUTC = event.regCutoffDateUTC;
        this.sumDonations = event.sumDonations;
        this.eventID = event.eventID;
        this.name = event.name;
        this.hasLocation = event.hasLocationendDateUTC;
        this.endDateUTC = event.endDateUTC;
        this.avatarImageURL = event.avatarImageURL;
        this.startDateUTC = event.startDateUTC;
        this.numDonations = event.numDonations;
    }
}