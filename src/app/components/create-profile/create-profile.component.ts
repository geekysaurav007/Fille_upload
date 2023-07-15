import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { profile } from '../../models/profile'
import { MyserviceService } from 'src/app/services/myservice.service';
import { FileuploadService } from 'src/app/services/fileupload.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  constructor(private addImage:FileuploadService) { }
  form!: FormGroup;
  profile!: profile;
  imgdata: string | File = ''
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      image: new FormControl('')
    })
  }
  
  onSubmit(data: any) {
   
    this.addImage.addProfile(this.form.value.name,this.form.value.image).subscribe((res:any)=>{
      console.warn(res)
    },(err)=>{
      console.warn(err)
    })
    this.form.reset();
    this.imgdata=''
  }


// -------------------------------------------------------------->>>>
  onfileSelect(event: Event) {
    const file = event.target as HTMLInputElement;
    if (!file.files?.length) {
      return;
    }
    const mydataTpes = ["image/png", "image/jpg", "image/jpeg"]
    const filedata = file.files[0];
    this.form.value.image = filedata
    if (filedata && mydataTpes.includes(filedata.type)) {
      const reader = new FileReader()
      reader.onload = () => {
        this.imgdata = reader.result as string 
      }
      console.warn(filedata);
      console.warn( reader.readAsDataURL(filedata));
     
    }
 
  }

// -------------------------------------------------------------------------------->>


  clearpic() {
    this.imgdata = ''
  }
}
