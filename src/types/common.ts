export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  userName?: string;
}

interface LatLng {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: LatLng;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website?: string;
  company: Company;
}

export interface Comment {
  postId?: number;
  id?: number;
  name?: string;
  email?: string;
  body?: string;
}
