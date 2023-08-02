import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  listofproduct : any[]=[];
  constructor(private http : HttpClient) { }

  loginUser(user:any):Observable<any>
  {
    return this.http.post('http://localhost:8080/login',user);
  }

  getallproducts():Observable<any>
  {
    return this.http.get("http://localhost:8080/getallproducts");
  }
  getallCategorys():Observable<any>
  {
    return this.http.get("http://localhost:8080/allCategorys");
  }
  addproduct(product : any):Observable<any>
  {
      return this.http.post("http://localhost:8080/addproduct",product);
  }
  deleteproduct(id:any):Observable<any>
  {
      return this.http.delete(`http://localhost:8080/deleteproduct/${id}`);
  }
  geproductbyid(id:any):Observable<any>
  {
      return this.http.get(`http://localhost:8080/getproductbyid/${id}`);
  }
  updateproduct(product:any):Observable<any>
  {
    return this.http.put("http://localhost:8080/updateproduct",product)
  }
}
