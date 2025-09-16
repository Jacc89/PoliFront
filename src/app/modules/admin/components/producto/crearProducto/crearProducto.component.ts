import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-crearProducto',
  templateUrl: './crearProducto.component.html',
  styleUrls: ['./crearProducto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  formProduct = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.maxLength(200)]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    category: ['', Validators.required]
  });

  isEditMode = false;
  productId?: number;
  showValidationErrors = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Detectar si hay un ID en la ruta
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.productId = +id;
        // Cargar el producto desde el backend
        // this.productService.getProductById(this.productId).subscribe(product => {
        //   this.formProduct.patchValue(product);
        // });
      }
    });
  }

  onSubmit() {
    if (this.formProduct.invalid) {
      this.showValidationErrors = true;
      return;
    }

    const productData = this.formProduct.value;

    if (this.isEditMode && this.productId) {
      // this.productService.updateProduct(this.productId, productData).subscribe(() => {
      //   alert('Producto actualizado correctamente');
      //   this.router.navigate(['/productos']);
      // });
    } else {
      // this.productService.createProduct(productData).subscribe(() => {
      //   alert('Producto creado correctamente');
      //   this.router.navigate(['/productos']);
      // });
    }
  }
}

// }
