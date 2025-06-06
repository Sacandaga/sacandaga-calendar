import type { TConfig } from "@shared/types";

import { author, description, license, version } from "package.json";

export const API_URL_DEV = "http://localhost:5000";

export const API_URL_PROD = "https://sacandaga-backend.fly.dev";

export const AppInfo = {
	name: "Sacandaga Calendar",
	version,
	description,
	author: {
		name: author,
		url: "https://cdleveille.net"
	},
	license,
	url: "https://sacandaga.fly.dev"
};

export const DefaultConfig: TConfig = {
	PORT: 3000
};

export enum Env {
	Production = "production",
	Development = "development"
}

export enum Path {
	Public = "public",
	ClientSrc = "src/client"
}

export enum ErrorMessage {
	InternalServerError = "Internal server error",
	LoadEventData = "Error loading calendar data",
	AddEvent = "Error creating new stay",
	EditEvent = "Error updating stay",
	DeleteEvent = "Error deleting stay",
	ValidateToken = "Error validating password",
	InvalidToken = "Incorrect password"
}

export enum EventColor {
	Blue = "#2365A1",
	Green = "#388E3C",
	Purple = "#7B1FA2",
	Red = "#C62828",
	Orange = "#A0522D",
	Gray = "#555555",
	Teal = "#00796B"
}

export const STORED_STATE_PREFIX = "state";

export const HASH_PREFIX = "~";

export const HASH_REGEX = new RegExp(`${HASH_PREFIX}.{8}\\.[a-zA-Z0-9]+$`);
