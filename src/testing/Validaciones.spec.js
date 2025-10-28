import { validarFormulario } from '../assets/utils/Validaciones';

let testdato;
beforeEach(() => {
    testdato = {
        email: 'testdato@gmail.cl',
        password: 'TestDato123$',
        confirmPassword: 'TestDato123$',
        birthDay: '2000-01-07'
    }
});

describe('validarFormulario', () => {
    //aprobando el formulario completo
    it('debe aprobar el data valido', () => {
    const errors = validarFormulario(testdato);
    expect(errors).toEqual({});
    });

    it('debe detectar múltiples errores a la vez (Email y Contraseña)', () => {
    const errors = validarFormulario({
        ...testdato, 
        email: 'sinarroba.com', 
        password: 'SinNumero$P' 
    });
    expect(errors.email).toBe('Correo inválido');
    expect(errors.password).toBeTruthy(); 
    expect(errors.birthDay).toBeUndefined(); 
    });

    //Correo
    it('debe rechazar el formulario si el email esta vacio', () => {
    const errors = validarFormulario({...testdato, email: ''});
    expect(errors.email).toBe('Correo Obligatorio'); 
    });

    it('debe rechazar el correo del data sin arroba', () => {
        const errors = validarFormulario({...testdato, email: 'testdato-duocuc.cl'});
        expect(errors.email).toBe("Correo inválido");
    })

    //Contraseña

    it('debe rechazar el formulario si la contraseña esta vacia', () => {
    const errors = validarFormulario({...testdato, password: ''});
    expect(errors.password).toBe('La contraseña es obligatoria'); 
    });     

    it('debe rechazar la contraseña del data sin tener caracter especial', () => {
        const errors = validarFormulario({...testdato, password: 'nosEnose1'})
        expect(errors.password).toBe("La contraseña debe tener entre 8 y 15 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
    })

    it('debe rechazar la contraseña del data sin tener un numero', () => {
        const errors = validarFormulario({...testdato, password: 'nosEnose$'})
        expect(errors.password).toBe("La contraseña debe tener entre 8 y 15 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
    })

    it('debe rechazar la contraseña del data sin tener la cantidad de caracteres permitidos', () => {
        const errors = validarFormulario({...testdato, password: 'nO$4'})
        expect(errors.password).toBe("La contraseña debe tener entre 8 y 15 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
    })

    it('debe rechazar la contraseña del data sin tener un caracter en mayuscula', () => {
        const errors = validarFormulario({...testdato, password: 'nosenose$1'})
        expect(errors.password).toBe("La contraseña debe tener entre 8 y 15 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
    })

    it('debe rechazar la contraseña del data sin tener un caracter en minuscula', () => {
        const errors = validarFormulario({...testdato, password: 'NOSENOSE$1'})
        expect(errors.password).toBe("La contraseña debe tener entre 8 y 15 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
    })
    //Confirmar Contraseña

    it('debe rechazar el formulario si la confirmacion de contraseña esta vacia', () => {
    const errors = validarFormulario({...testdato, confirmPassword: ''});
    expect(errors.confirmPassword).toBe('Ingrese la confirmacion de contraseña');
    });

    it('debe rechazar el formulario si las contraseñas no son iguales', () => {
        const errors = validarFormulario({...testdato, confirmPassword: 'Diferente1!'});
        expect(errors.confirmPassword).toBe('Las contraseñas no coinciden');
    });
    //Fecha Nacimiento
    it('debería rechazar la fecha de nacimiento si esta vacio', () => {
        const errors = validarFormulario({ ...testdato, birthDay: '' });
        expect(errors.birthDay).toBe('Debe ingresar su fecha de nacimiento');
    });

    it('debe rechazar el formulario si la fecha de nacimiento es menor al rango de edad', () => {
        const errors = validarFormulario({ ...testdato, birthDay: '2015-01-01' });
        expect(errors.birthDay).toBe('Debe ser mayor de 18 año de edad');
    });

    it('debe rechazar el formulario si la fecha de nacimiento no corresponde a una fecha valida', () => {
        const errors = validarFormulario({ ...testdato, birthDay: '1800-01-01' });
        expect(errors.birthDay).toBe('Ingrese una fecha válida');
    });


});

