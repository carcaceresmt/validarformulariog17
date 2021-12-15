import React from 'react'
import { useForm } from "react-hook-form"
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"


const Formulario = () => {

    const validacion = Yup.object().shape({

        titulo: Yup.string().required("Requiere el Titulo"),
        nombres: Yup.string().required("Requiere Nombres"),
        apellidos: Yup.string().required("Requiere Apellidos"),
        email:Yup.string().required("Email es Requerido").email("Email Ingresado es Invalido"),
        password:Yup.string()
        .required("Password Requerido")
        .min(8,"La Contraseña debe tener Minimo 8 Caracteres"),
        confpass:Yup.string()
        .required("Password de Confirmación Requerido")
        .oneOf([Yup.ref('password'),null],"Password no Coinciden!!")
        
    })

    const formvalidar = { resolver: yupResolver(validacion) }
    const { register, handleSubmit, reset, formState } = useForm(formvalidar)
    const { errors } = formState

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        return false
    }



    return (
        <div className="container mt-5">
            <h3 className="text-center mt-3 mb-3">Datos de Persona</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label><strong>Titulo</strong></label>
                <select name="titulo"
                {...register('titulo')}
                className={`form-control ${errors.titulo ?'is-invalid':''}`}
                >
                    <option value=""></option>
                    <option value="Señor">Señor</option>
                    <option value="Señora">Señora</option>
                </select>
                <div className='invalid-feedback'>{errors.titulo?.message}</div>

                <label><strong>Nombres</strong></label>
                <input type="text" name="nombres" 
                 {...register('nombres')}
                 className={`form-control ${errors.nombres ?'is-invalid':''}`}
                />
                 <div className='invalid-feedback'>{errors.nombres?.message}</div>


                <label><strong>Apellidos</strong></label>
                <input type="text" name="apellidos" 
                {...register('apellidos')}
                className={`form-control ${errors.apellidos ?'is-invalid':''}`}
                />
                 <div className='invalid-feedback'>{errors.apellidos?.message}</div>


                 <label><strong>Email</strong></label>
                <input type="text" name="email" 
                {...register('email')}
                className={`form-control ${errors.email ?'is-invalid':''}`}
                />
                 <div className='invalid-feedback'>{errors.email?.message}</div>


                 <label><strong>Password</strong></label>
                <input type="password" name="password" 
                {...register('password')}
                className={`form-control ${errors.password ?'is-invalid':''}`}
                />
                 <div className='invalid-feedback'>{errors.password?.message}</div>


                 <label><strong>Confirmar Password</strong></label>
                <input type="password" name="confpass" 
                {...register('confpass')}
                className={`form-control ${errors.confpass ?'is-invalid':''}`}
                />
                 <div className='invalid-feedback'>{errors.confpass?.message}</div>

                <button type='submit' className='btn btn-primary mt-3'>Guardar</button>
            </form>


        </div>
    )
}

export default Formulario
