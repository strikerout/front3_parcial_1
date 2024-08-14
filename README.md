# Parcial 1 - Front End III

## Descripción del Proyecto

Este proyecto es el primer parcial del curso de Front End III. Consiste en una aplicación web desarrollada con **React** que permite a los usuarios seleccionar su género de videojuego favorito, ingresar el nombre de su videojuego favorito y proporcionar un enlace a una imagen relacionada. Una vez enviado el formulario, la aplicación muestra una tarjeta (`Card`) con la información proporcionada.

## Estructura del Proyecto

- **App**: Componente principal que maneja el estado de los datos enviados desde el formulario (`Form`) y los pasa al componente de la tarjeta (`Card`) para su renderizado.
  
- **Form**: Componente que contiene un formulario con un campo desplegable para seleccionar el género de videojuego favorito, un campo de texto para el nombre del videojuego y un campo de texto para ingresar el enlace de una imagen. Valida los campos antes de enviar los datos al componente `App`.

- **Card**: Componente que muestra la información ingresada por el usuario en un formato visualmente atractivo, incluyendo el género de videojuego, el nombre del videojuego y la imagen proporcionada.

## Estilos

- Se han aplicado estilos CSS a través de módulos (`CSS Modules`) para asegurar el encapsulamiento de los estilos y evitar conflictos en la aplicación.

## Características

- **Validación de Formulario**: El formulario valida que todos los campos sean completados correctamente antes de permitir el envío.
- **Visualización Dinámica**: Los datos ingresados en el formulario se muestran dinámicamente en la tarjeta después de la sumisión.
