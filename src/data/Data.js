const Data = {
    name: 'Angeles S.A de C.V.',
    institutions: [
        {
            name: 'Pedregal 2',
            departments: [
                {
                    name: 'Departamento de emergencias',
                    others: [
                        {
                            name: 'Emergencia Adulto',
                            services: [
                                {
                                    name: 'Sala de choque',
                                    items: [
                                        {
                                            name: 'Consulta general',
                                            description: 'Homeopática sin horario'
                                        },
                                        {
                                            name: 'Consulta de cardiología',
                                            description: 'Adultos Revisión'
                                        }
                                    ]
                                },
                                {
                                    name: 'Sala de observación',
                                    items: []
                                },
                                {
                                    name: 'Sala de emergencia',
                                    items: []
                                }
                            ]
                        },
                        {
                            name: 'Emergencia Infantil',
                            services: []
                        }
                    ]
                }
            ]
        },
        {
            name: 'Acoxpa',
            departments: []
        },
        {
            name: 'Interlomas',
            departments: []
        },
        {
            name: 'Roma',
            departments: []
        }
    ]
};

export default Data;