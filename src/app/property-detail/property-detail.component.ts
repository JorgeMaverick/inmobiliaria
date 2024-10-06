import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property: any;
  currentImageIndex = 0;
  isFormOpen = false; // Controla la apertura del formulario

  property1 = {
    images: [
      'https://colombiarents.com/wp-content/uploads/2018/05/alquiler-penthouse-cartagena-16-38129_880x550.jpg',
      'https://a0.muscache.com/im/pictures/8d72cef3-fae4-4ed3-a905-d4980a3917e5.jpg?im_w=720',
      'https://st3.depositphotos.com/1391729/35048/i/450/depositphotos_350484602-stock-photo-swimming-pool-wooden-deck-view.jpg',
      // más imágenes...
    ]
  };

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.property = this.propertyService.getProperty(id);
  }
  getMapUrl(location: string): string {
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${location}`;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.property.images.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.property.images.length) % this.property.images.length;
  }
  openForm() {
    this.isFormOpen = true; // Abre el formulario
  }

  closeForm() {
    this.isFormOpen = false; // Cierra el formulario
  }

  onSubmit() {
    // Maneja el envío del formulario
    console.log('Formulario enviado');
    // Aquí puedes agregar la lógica para manejar los datos del formulario
    this.closeForm(); // Cierra el formulario al enviar
  }
}
