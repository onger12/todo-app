# ToDo App # - React.

# Introducción
Aplicación web responsive que te permite agregar tus tareas y tacharlas cuando las completes. ¿Te equivocaste? ¡Editala! y si ya no la quieres, ¡Eliminala!

# VERSIÓN 0 #

# Funcionalidades
  * Agrega tareas
  * Edita tareas existentes
  * Elimina tareas
  * Completa tareas

# Flujo de componentes
  * **App**
    En el componente App hay un formulario a la espera de que el usuario introduzca el cuerpo de la nueva nota. Este cuerpo es almacenado en un _useState_ y enviado al componente _Notas_
  * **Notas**
      * _**Función**_: Se encarga de almacenar todas las notas (Nota)
      * _**Funcionamiento**_: En el componente Notas hay un **useEffect** que tiene como dependencia la variable cuerpo que le llega por props al componente. Este efecto ejecuta una función que, primero valida si el cuerpo que llegó no es nulo, indefinido o un string vacío y posterior a esto, si pasa la validación, lo agrega a un arreglo de 'cuerpos' que está almacenado en un **useState**. Este componente Notas retorna una iteración con el metodo map sobre el arreglo cuerpos y este, a su vez, retorna un componente _**Nota**_ y le pasa por props el cuerpo que corresponda a su posición en la iteración.
  * **Nota**
    * _**Función**_: Se encarga de almacenar los datos de la nota, incluyendo el cuerpo que le llega por props
      * Datos de la nota:
        * Cuerpo: Inicializado con la prop que le llega desde el componente Notas
        * Checked: Un booleano que permite saber si la tarea está completada o no
        * Activo: Un booleando que permite saber si la nota está activa o no
    * _**Funcionamiento**_: En el componente Nota se almacenan los datos de la nota (cuerpo, checked, activo) cada uno en un useState. Este componente tiene 3 partes: La primera parte es un input de tipo checklist, la segunda parte es el cuerpo de la tarea (una cadena de texto) y la última parte son dos botones (editar y eliminar).
      * El input checklist está escuchando un evento de cambio (onChange) para cambiar el estado de la variable _checked_ y renderizar el cuerpo de la nota a partir del estado de esta variable
      * El cuerpo se renderiza a partir de la variable _cuerpo_
      * El botón editar está escuchando un evento de click (onClick) para cambiar el estado de la variable _editando_ y renderizar, en lugar de la nota, el componente EditarNota.
      * El botón eliminar está escuchando un evento de click (onClick) para cambiar el estado de la variable _activo_ y, a partir del renderizado condicional, retornar null si su valor es false, o retornar la nota si su valor es true
  * **EditarNota**
    * _**Función**_: Medio por el cual el usuario ingresa el nuevo cuerpo de la nota
    * _**Funcionamiento**_: Este componente recibe por props dos funciones: La primera es la función setCuerpo y la segunda es la función setEditando. Ambas funciones pertenecen a los hooks useState correspondientes. Este componente renderiza un form con un input de tipo texto. Al momento en que ocurre el evento onSubmit del form se llama a la funcion local handleNote y en esta el valor del input es modificado a través de la función _setCuerpo_ y, por último, cambiamos el estado _editando_ a false por medio de la función _setEditando_ recibida por props.

# Sobre la app
  * Dependencias
    - uuid (v8.3.2)
    - react (v18.2.0)
    - react-dom (18.2.0)
    - react-scripts (5.0.1)
  * Implementaciones
    - Hooks : { useState, useEffect }
    - Eventos : { onSubmit, onChange, onClick }
  * Características
    - Css responsive
    - Renderizado condicional
    - SPA
