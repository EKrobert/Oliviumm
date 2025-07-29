export type Harvest = {
  id: number;
  date: string;
  quantity: number;
  quality: string;
  destination: string;
  originLocation: string;
  oliveType: string;
  harvestMethod: string;
};

export type ProfileForm = {
  name: string;
  farmName: string;
  location: string;
  surface: string;
};