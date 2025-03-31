import { callApi } from './services';
import { DEFAULT_ID, Event, Participant, Team } from './types';

const BASE_URL = "https://stackup.donordrive.com/api";

export class StackUpController {

    private constructor() { }

    /**
     * Get event data using an EventID.
     */
    public static async getEvent(id: number = DEFAULT_ID.EVENT): Promise<Event | undefined> {
        const json = await callApi(`${BASE_URL}/events/${id}`);
        if (!json)
            return;
        return json as Event;
    }

    /**
     * Get team data using a TeamID.
     */
    public static async getTeam(id: number = DEFAULT_ID.TEAM): Promise<Team | undefined> {
        const json = await callApi(`${BASE_URL}/teams/${id}`);
        if (!json)
            return;
        return new Team(json);
    }

    /**
     * Get participant data using a ParticipantID.
     */
    public static async getParticipant(id: number = DEFAULT_ID.PARTICIPANT): Promise<Participant | undefined> {
        const json = await callApi(`${BASE_URL}/participants/${id}`);
        if (!json)
            return;
        return new Participant(json);
    }
}