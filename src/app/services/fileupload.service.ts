import { Injectable } from '@angular/core';
import { profile } from '../models/profile';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  private profile:profile[]=[]
  readonly url="http://localhost:5000/api/profiles"
  constructor(private http:HttpClient) { }

  addProfile(name:string,image:File){
    const profileData=new FormData();
    profileData.append("name",name)
    profileData.append("image",image,name)
    return this.http.post(this.url,profileData)
  }
  
}
