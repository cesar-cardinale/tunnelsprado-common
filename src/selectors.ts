import { RootState } from './store';

export const getStates = (state: RootState) => state.states;
export const getTicketsFlux = (state: RootState) => state.ticketsFlux;
export const getReceipts = (state: RootState) => state.receipts;
export const getRefunds = (state: RootState) => state.refunds;
export const getBanks = (state: RootState) => state.banks;
export const getConfig = (state: RootState) => state.config;
export const getTickets = (state: RootState) => state.tickets;
export const getPosts = (state: RootState) => state.posts;
export const getTraffic = (state: RootState) => state.traffic;