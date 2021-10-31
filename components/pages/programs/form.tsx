interface IField {
  id: string;
  label: string;
  placeholder: string;
  description?: string;
  type: string;
}

export const ProgramsForm = () => {
  const fields: IField[] = [
    {
      id: 'student-cpf',
      label: 'CPF',
      type: 'text',
      placeholder: '000.000.000-00',
      description: 'Digite o seu CPF',
    },
    {
      id: 'program-password',
      label: 'Senha',
      type: 'text',
      placeholder: 'alomaeformei',
      description: 'Digite a senha única do seu curso',
    }
  ];

  return (
    <div className="md:col-span-3">
      <form action="#" method="POST">
        <div className="shadow rounded-md overflow-hidden">

          {/* Fields */}
          <div className="p-6 lg:px-4 py-5 bg-white space-y-6 ">

            {fields.map((field) => (
              <div key={field.id} className="grid grid-cols-3 gap-6">
                <div className="col-span-3">
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 ml-0.5">
                    {field.label}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type={field.type}
                      name={field.id}
                      id={field.id}
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md text-sm border-gray-300"
                      placeholder={field.placeholder}
                    />
                  </div>
                  {field.description && <p className="mt-1 text-sm text-gray-500 ml-0.5">
                    {field.description}
                  </p>}
                </div>
              </div>
            ))}

          </div>

          {/* Buttons bar */}
          <div className="px-6 lg:px-4 py-3 bg-gray-50 text-right">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Acessar
            </button>
          </div>
        </div>
      </form>
    </div>

  )
};
