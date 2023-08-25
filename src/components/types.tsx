export type UsersListProps = {
  data?: User[];
};

export type TodoListProps = {
  data?: Todo[];
};

export type HocProps<T> = {
  data?: T[];
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type GeoCoordinates = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoCoordinates;
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type UserState = {
  usersList: User[],
  term: string,
  filteredList: User[],
};

export type TodoState = {
  todoList: Todo[],
  term: string,
  filteredList: Todo[],
};


export type HocState<T> = {
  list: T[];
  term: string;
  filteredList: T[];
};




