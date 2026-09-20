import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  // Sinal reativo para controlar a exibição da confirmação de envio
  protected readonly enviado = signal(false);

  // Formulário reativo (FormGroup) com validações nos campos obrigatórios
  protected readonly formulario = new FormGroup({
    nome: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    nascimento: new FormControl('', { nonNullable: true }),
    comentario: new FormControl('', { nonNullable: true }),
  });

  // Valida os campos antes de confirmar o envio e limpar o formulário
  protected enviar(): void {
    this.enviado.set(false);

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.enviado.set(true);
    this.formulario.reset();
  }
}
