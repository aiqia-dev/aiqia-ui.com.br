import {
  Button,
  Checkbox,
  Input,
  Label,
  MaskedInput,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@/components";
import React from "react";

export default {
  title: "Examples/PageForm",
  tags: ["autodocs"],
};

export const PageExample = {
  render: (args: any) => {
    const MaskedInputState = () => {
      const [tel, setTel] = React.useState("");
      return (
        <MaskedInput
          mask="(##) #####-####"
          value={tel}
          onChange={setTel}
          placeholder="(00) 00000-0000"
        />
      );
    };

    return (
      <main {...args} className="p-10">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold">Page title</h1>
        </header>

        <form onSubmit={(e) => e.preventDefault()}>
          <h5 className="font-semibold my-3">Subtitle form</h5>
          <div className="flex flex-wrap gap-3">
            <div className="w-80">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Digite seu nome" />
            </div>

            <div className="w-40">
              <Label>Gênero</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Masculino</SelectItem>
                  <SelectItem value="female">Feminino</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-40">
              <Label>Telefone</Label>
              <MaskedInputState />
            </div>

            <div className="w-40">
              <Label htmlFor="doc">Documento</Label>
              <RadioGroup
                defaultValue="cpf"
                className="flex h-9 items-center gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="cpf" value="cpf" />
                  <Label htmlFor="cpf">CPF</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="cnpj" value="cnpj" />
                  <Label htmlFor="cnpj">CNPJ</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <h5 className="font-semibold my-4">Subtitle form</h5>

          <div className="flex-1 flex items-center space-x-2 mt-3 gap-3">
            <div className="flex items-center gap-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>

            <div className="flex-1 flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>

          <footer className="flex justify-end items-center gap-4 mt-8">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </footer>
        </form>
      </main>
    );
  },
};
