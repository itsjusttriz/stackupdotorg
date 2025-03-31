export interface Event {
    name: string;
    eventID: number;
    startDateUTC: string;
    endDateUTC: string;
    numDonations: number;
    sumDonations: number;
    fundraisingGoal: number;
    numParticipants: number;
    numTeams: number;
    links: {
        register: string;
        donate: string;
        page: string;
    }
    avatarImage: string;
    publishDateUTC: string;
    donCutoffDateUTC: string;
    timeZone: string;
    type: string;
    hasDates: boolean;
    regCutoffDateUTC: string;
    hasLocationendDateUTC: boolean;
    avatarImageURL: string;
}

