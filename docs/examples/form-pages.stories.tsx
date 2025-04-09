import { Button, Input, Label } from "@/components";

export default {
  title: "Examples/PageForm",
  tags: ["autodocs"],
};

export const PageExample = {
  render: (args: any) => (
    <main {...args} className="p-10">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">Page title</h1>
      </header>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input id="state" />
          </div>
          <div>
            <Label htmlFor="zip">ZIP Code</Label>
            <Input id="zip" />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input id="country" />
          </div>
          <div>
            <Label htmlFor="occupation">Occupation</Label>
            <Input id="occupation" />
          </div>
        </div>

        <footer className="flex justify-end items-center gap-4 mt-8">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </footer>
      </form>
    </main>
  ),
};
