
export const constants = {
    'OTHERLINK' : 'https://www.habitattucson.org/services/other-resources/'
}


// Global object with headers, titles, etc. Uses language

export const titles = (language, thisTitle) => {
    const theTitles = {
        "HR_ELIGIBLE": {
            en: 'Eligible Home Repair Programs',
            es: 'Programas de reparación de viviendas elegibles'
        },
        "HR_NOTELIGIBLE": {
            en: 'Unfortunately, you do not qualify for any of our Home Repair programs',
            es: 'Desafortunadamente, no califica para ninguno de nuestros programas de reparación de viviendas'
        },
        "HR_OTHERRESOURCES": {
            en: 'Thank you for thinking of Habitat for Humanity Tucson. We are sorry that you do not qualify for any of our Home Repair programs.',
            es: 'Gracias por pensar en Hábitat para la Humanidad Tucson. Lamentamos que no califique para ninguno de nuestros programas de reparación de viviendas'
        },  
        "HR_NOTQUALIFIED": {
            en: 'Unfortunately, you do not qualify for our Home Repair program',
            es: 'Desafortunadamente, no califica para nuestro programa de reparación de viviendas'
        }, 
        "HR_NOTEMERGENCY": {
            en: 'You may choose to continue with the understanding that Home Repair cannot be used for urgent repairs.',
            es: 'Puede optar por continuar con el entendimiento de que Reparacion de Viviendas no se puede utilizar para reparaciones urgentes.'
        },               
        "HR_OTHERLINK": {
            en: 'Click to be redirected to a list of other providers of service',
            es: 'Haga clic para ser redirigido a una lista de otros proveedores de servicios'
        },               
        "HR_PROGRAM": {
            en: 'Repair Program',
            es: 'Programa de Reparación'
        },
        "HR_WAITLIST": {
            en: 'Wait_Time',
            es: 'Tiempo de Espera'
        },
        "HR_PROCEED": {
            en: 'Proceed with application',
            es: 'Proceder con la aplicación'
        }, 
        "HR_CANCEL": {
            en: 'Cancel',
            es: 'Cancelar'
        },
        "HR_SUBMITTED": {
            en: 'Your home repair request has been submitted',
            es: 'Su solicitud de reparación de vivienda ha sido sometida'
        }, 
        "HR_SUBMITTEXT": {
            en: 'Please print this page for your records. You application ID is shown below:',
            es: 'Por favor imprima esta página para sus archivos. Su ID de aplicación se muestra a continuación:'
        },   
        "HR_CANCELLED": {
            en: 'Thank you for considering Habitat for Humanity Tucson.',
            es: 'Gracias por considerar Hábitat para la Humanidad Tucson.'
        }, 
        "HR_CANCELLEDTEXT": {
            en: 'You have chosen to not complete your home repair request. If your situation changes please feel free to contact us in the future.',
            es: 'Ha optado por no completar su solicitud de reparación del hogar. Si su situación cambia, no dude en contactarnos en el futuro.'
        },                

        "AP_EMERGENCY": {
            en: 'Continue application as a NON EMERGENCY.',
            es: 'Continúe con la aplicación como NO EMERGENCIA.'
        },
        "GA_ADDRESS": {
            en: 'Provide the street address of the home',
            es: 'Proporcione la dirección de la calle de la casa'
        }, 
        "GA_SUBADDRESS": {
            en: 'Address should not include lot or unit number',
            es: 'La dirección no debe incluir el número de lote o unidad'
        },        
        "GA_GOTADDRESS": {
            en: 'Address of the home:',
            es: 'Dirección de la casa'
        },           
        "GA_YOUR": {
            en: 'Your address...',
            es: 'Su dirección...'
        },  
        "GA_REENTER": {
            en: 'Please reenter the address and select it from the list!',
            es: '¡Vuelva a ingresar la dirección y selecciónela de la lista!'
        },    
        "QP_ANSWER": {
            en: 'Please answer the questions:',
            es: 'Por favor responda las preguntas:'
        },   
        "QP_SIZE": {
            en: 'Family Size',
            es: 'Tamaño de la familia'
        },  
        "QP_INCOME": {
            en: 'Maximum Income',
            es: 'Ingreso máximo'
        },   
        "RL_BUTTON": {
            en: 'Select the needed repairs -> Click when Done',
            es: 'Seleccione las reparaciones necesarias -> Haga clic cuando haya terminado'
        },    
        "RL_ALERT": {
            en: 'You must select one or more repairs!',
            es: '¡Debe seleccionar una o más reparaciones!'
        },     
        "CA_NAME": {
            en: 'Name',
            es: 'Nombre'
        }, 
        "CA_YOURNAME": {
            en: 'Your name',
            es: 'Su nombre'
        }, 
        "CA_PHONE": {
            en: 'Phone',
            es: 'Teléfono'
        },     
        "CA_PHONENUMBER": {
            en: '(520) 555-1212',
            es: '(520) 555-1212'
        },     
        "CA_ALTPHONE": {
            en: 'Alternate Phone',
            es: 'Teléfono alternativo'
        },     
        "CA_ALTPHONENUMBER": {
            en: '(520) 555-1212',
            es: '(520) 555-1212'
        },   
        "CA_EMAIL": {
            en: 'Email',
            es: 'Correo electrónico'
        }, 
        "CA_EMAILADDR": {
            en: 'Email address',
            es: 'Dirección de correo electrónico'
        },    
        "CA_GENDER": {
            en: 'Gender',
            es: 'Género'
        }, 
        "CA_GENFEMALE": {
            en: 'Female',
            es: 'Mujer'
        },   
        "CA_GENMALE": {
            en: 'Male',
            es: 'Hombre'
        }, 
        "CA_GENNA": {
            en: 'Rather not say',
            es: 'Prefiero no decirlo'
        },    
        "CA_MARITAL": {
            en: 'Marital Status',
            es: 'Estado Civil'
        },  
        "CA_MSMARRIED": {
            en: 'Married',
            es: 'Casado/a'
        },  
        "CA_MSSINGLE": {
            en: 'Single',
            es: 'Soltero/a'
        },  
        "CA_MSDIVORCED": {
            en: 'Divorced',
            es: 'Divorciado/a'
        },  
        "CA_MSSEPERATED": {
            en: 'Seperated',
            es: 'Separado/a'
        },  
        "CA_MSWIDOWED": {
            en: 'Widowed',
            es: 'Viuda'
        },  
        "CA_MILBRANCH": {
            en: 'Military Service',
            es: 'Servicio militar'
        },  
        "CA_MBARMY": {
            en: 'Army',
            es: 'Ejército'
        },  
        "CA_MBMARINE": {
            en: 'Marine',
            es: 'Marino'
        },  
        "CA_MBNAVY": {
            en: 'Navy',
            es: 'Armada'
        },  
        "CA_MBAIRFORCE": {
            en: 'Air Force',
            es: 'Fuerza Aerea'
        },  
        "CA_MBSPACEFORCE": {
            en: 'Space Force',
            es: 'Fuerza Espacial'
        },  
        "CA_MBCOASTGUARD": {
            en: 'Coast Guard',
            es: 'Guardia Costera'
        },  
        "CA_MBNATIONALGUARD": {
            en: 'National Guard',
            es: 'Guardia Nacional'
        },  
        "CA_MBUNKNOWN": {
            en: 'Unknown',
            es: 'Desconocido'
        },  
        "CA_MBSELECTALL": {
            en: 'Select all that apply',
            es: 'Seleccione todas las que correspondan'
        }, 
        "CA_MSDATES": {
            en: 'Service Dates',
            es: 'Fechas de Servicio'
        }, 
        "CA_MSDATESEXAMPLE": {
            en: 'for example: 1972-1976',
            es: 'por ejemplo: 1972-1976'
        }, 
        "CA_BIRTHYEAR": {
            en: 'Year of Birth',
            es: 'Año de nacimiento'
        }, 
        "CA_OTHERS": {
            en: 'Others living in home (name/age/relationship)',
            es: 'Otros que viven en casa (nombre/edad/relación)'
        }, 
        "CA_LOT": {
            en: 'Lot or Unit Number',
            es: 'Número de lote o unidad'
        }, 
        "CA_LOTHELPER": {
            en: 'Mobile home or condo?',
            es: '¿Casa mobil o condominio?'
        },         
        "CA_REPAIRS": {
            en: 'Please describe the repairs you are requesting.',
            es: 'Describa las reparaciones que está solicitando.'
        },         
        "CA_BUTTON": {
            en: 'Fill out this form -> Click when Done',
            es: 'Complete este formulario -> Haga clic cuando haya terminado'
        }, 
        "OT_HEADER": {
            en: 'List the members of the household (or type none)',
            es: 'Liste los miembros del hogar (o escriba ninguno)'
        },         
        "OT_NAME": {
            en: 'Their Name *',
            es: 'Nombre de ellos *'
        }, 
        "OT_AGE": {
            en: 'Their Age *',
            es: 'Edad de ellos *'
        }, 
        "OT_RELATION": {
            en: 'Relationship *',
            es: 'Relación *'
        }, 
    }
    return theTitles[thisTitle][language]
}