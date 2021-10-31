import { useState } from "react";
import { useForm } from "react-hook-form";
import { matchProgramStudent } from "../../../services/programs";
import { Spinner } from "../../loading/spinner";
interface IField {
  id: string;
  label: string;
  placeholder: string;
  description?: string;
  type: string;
  registerOptions: { [d: string]: any };
  errorMessages: { [d: string]: any };
}

export const ProgramsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ studentCpf, programPassword }) => {
    setIsSubmitting(true);
    const match = await matchProgramStudent(studentCpf, programPassword);
    console.log(match);
  }

  const fields: IField[] = [
    {
      id: 'studentCpf',
      label: 'CPF',
      type: 'text',
      placeholder: '000.000.000-00',
      description: 'Digite o seu CPF (apenas os números)',
      registerOptions: {
        required: true,
        pattern: /[0-9]{11}/i,
      },
      errorMessages: {
        required: 'Este campo é obrigatório',
        pattern: 'O CPF informado é inválido. Não esqueça de digitar apenas números.',
      }
    },
    {
      id: 'programPassword',
      label: 'Senha',
      type: 'text',
      placeholder: 'alomaeformei',
      description: 'Digite a senha única do seu curso',
      registerOptions: {
        required: true,
      },
      errorMessages: {
        required: 'Este campo é obrigatório',
      }
    }
  ];

  return (
    <div className="md:col-span-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow rounded-md overflow-hidden">

          {/* Fields */}
          <div className="p-6 lg:px-4 py-5 bg-white space-y-6 ">

            {fields.map((field) => (
              <div key={field.id} className="grid grid-cols-3 gap-6">
                <div className="col-span-3">
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 ml-0.5">
                    {field.label}
                  </label>
                  {field.description && <p className="mt-1 text-sm text-gray-500 ml-0.5">
                    {field.description}
                  </p>}
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type={field.type}
                      name={field.id}
                      id={field.id}
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md text-sm border-gray-300"
                      placeholder={field.placeholder}
                      {...register(field.id, { ...field.registerOptions })}
                    />
                  </div>
                  {errors && errors[field.id] && <p className="mt-1 text-sm text-red-500 ml-0.5">
                    {field.errorMessages[errors[field.id].type]}
                  </p>}
                </div>
              </div>
            ))}

          </div>

          {/* Buttons bar */}
          <div className="px-6 lg:px-4 py-3 bg-gray-50 text-right">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSubmitting && <Spinner color='white' insideButton={true} />}
              Acessar
            </button>
          </div>
        </div>
      </form>
    </div>

  )
};
