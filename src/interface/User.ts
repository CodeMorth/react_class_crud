export interface userDataViewInterface {
    id:        number;
    name:      string;
    email:     string;
    avatar:    string;
    createdAt: Date;
    updatedAt: Date;
}

export interface addUserInterface {

    name: string;
    email: string;
    avatar: File;

}