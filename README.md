# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
  string input = "Vincent;Vega;Vince\nMarsellus;Wallace;Big Man\nWinston;Wolf;The Wolf";
        Console.WriteLine("Bemenet:\n" + input + "\n");

        // A sorok szétválasztása '\n' alapján
        string[] rows = input.Split('\n');

        // Kétdimenziós tömb létrehozása a sorok és oszlopok számára
        string[,] table = new string[rows.Length, 3]; // Mivel 3 oszlop van a példában

        for (int i = 0; i < rows.Length; i++)
        {
            // Oszlopok szétválasztása ';' alapján
            string[] columns = rows[i].Split(';');

            // Minden sort és oszlopot eltárolunk a tömbben
            for (int j = 0; j < columns.Length; j++)
            {
                table[i, j] = columns[j];
            }
        }

        // A kétdimenziós tömb kiíratása
        Console.WriteLine("Kétdimenziós tömb:");
        for (int i = 0; i < rows.Length; i++)
        {
            for (int j = 0; j < 3; j++) // Mivel 3 oszlop van
            {
                Console.Write(table[i, j] + "\t");
            }
            Console.WriteLine();
     