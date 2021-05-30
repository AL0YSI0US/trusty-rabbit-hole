<details>
<summary>I gave it a go in spanish. . .</summary>
<br>

# Configuración de un entorno de desarrollo de Source Cred

## Construyendo SourceCred localmente

**Primero, ejecute los siguientes comandos para clonar y construir SourceCred:**

```sh
git clone https://github.com/sourcecred/sourcecred.git
cd sourcecred
yarn
yarn build
```

## Configuración y uso de la instancia de SourceCred

**A continuación, ejecute los siguientes comandos para clonar la instancia de SourceCred:**

```sh
git clone https://github.com/sourcecred/template-instance.git
cd template-instance
```

Usando esta instancia como punto de partida, puede actualizar la configuración para incluir
los complementos que desee, apuntando a los datos que le interesan. Recomendamos configurar
su instancia localmente primero y asegúrese de que esté funcionando antes de enviar sus cambios
dominar y usar la acción de Github.

1. Get Obtenga [Yarn] y luego ejecute `yarn` para instalar SourceCred y las dependencias.

2. Habilite los complementos que desea usar actualizando el archivo `sourcecred.json`. p.ej.
para habilitar todos los complementos:
```json
{
  "bundledPlugins": ["sourcecred/discourse", "sourcecred/discord", "sourcecred/github"]
}
```

3. Si está utilizando el complemento de GitHub o Discord, copie el archivo `.env.example` a un archivo` .env`:
```shell script
cp .env.example .env
```

4. Siga los pasos del [plugin guides below](#supported-plugins) para configurar los archivos de configuración y generar tokens de acceso
para cada complemento y luego pégalos en el archivo `.env` después del signo`=`.

**Usando un backend modificado**

Es probable que desee probar su versión modificada de SourceCred en una instancia con la que esté familiarizado.

Una forma conveniente de hacerlo es crear un alias para su versión alterada de SourceCred.

Aquí hay un ejemplo de cómo hacerlo en un shell bash:

```sh
# Mientras está en el repositorio del directorio SourceCred  
SC_REPOSITORY_DIR=`pwd`
alias scdev='node "$SC_REPOSITORY_DIR"/bin/sourcecred.js'

# Luego regrese al directorio de Instancia de plantilla, por ejemplo:
cd $MY_SC_INSTANCE
# Ejecute el comando `sourcecred go`, en su instancia, usando su código modificado.
scdev go
```
5. Inicializar las configuraciones
   a. cambio https://github.com/sourcecred/template-instance/blob/master/config/grain.json#L2 Ser distinta de-cero
   b. cambio https://github.com/sourcecred/template-instance/blob/master/sourcecred.json#L2 ser - estar ["sourcecred/discourse"]

6. desde su clon de instancia de plantilla local, ejecute `scdev go`
7. ejecute `scdev serve` ir a la URL que genera.


## Complementos compatibles

**GitHub**

El complemento de GitHub carga repositorios de GitHubs.

Puede especificar los repositorios para cargar
`config/plugins/sourcecred/github/config.json`.

La acción de Github tiene automáticamente su propio GITHUB_TOKEN, pero si necesita cargar datos desde el
Complemento de GitHub localmente, debe tener una clave API de GitHub en su archivo `.env` como
`SOURCECRED_GITHUB_TOKEN=<token>` (copie el archivo `.env.example` como referencia). La clave debe ser de solo lectura sin ningún especial
ámbitos o permisos (a menos que esté cargando un repositorio privado de GitHub, en cuyo caso
la clave necesita acceso a sus repositorios privados).

Puede generar una clave de API de GitHub [aquí](https://github.com/settings/tokens).

## Discourse

El complemento Discourse carga foros de Discourse; actualmente, solo se puede cargar un foro en una sola instancia. Esto no requiere ninguna API especial.
claves o permisos. Solo necesita configurar la URL del servidor en `config/plugins/sourcecred/discourse/config.json`.

## Discord

El complemento Discord carga los servidores de Discord y crea las reacciones de Cred en Discord. Para que SourceCred
acceder a su servidor de Discord, necesita generar un "bot token" y pegarlo en el archivo `.env` como
`SOURCECRED_DISCORD_TOKEN=<token>` (copie el archivo `.env.example` como referencia). También necesitarás agregarlo
a tus secretos de acción de GitHub.

Las instrucciones completas para configurar el complemento Discord se pueden encontrar en la [página del complemento Discord](https://sourcecred.io/docs/beta/plugins/discord/#configuration) en la documentación de SourceCred.

## Eliminar complementos

Para desactivar un complemento, simplemente elimínelo de la matriz `bundledPlugins` en el archivo` sourcecred.json`.
También puede eliminar su directorio `config/plugins/OWNER/NAME` por si acaso.


[Yarn]: https://classic.yarnpkg.com/

+ Translated [here](https://translate.google.com/?sl=auto&tl=es&text=I%20enjoy%20the%20freedom%20to%20create%20at%20Source%20cred&op=translate)
</details>
