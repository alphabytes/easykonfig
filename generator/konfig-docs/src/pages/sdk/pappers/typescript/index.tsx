import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PappersTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="pappers-typescript-sdk"
      metaDescription={`Avec Pappers, accédez à toute toute l'information légale, juridique financière des sociétés françaises !
Découvrez nos offres : https://www.pappers.fr/api et https://www.pappers.fr/exports`}
      company="Pappers"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pappers/logo.png"
      companyKebabCase="pappers"
      clientNameCamelCase="pappers"
      homepage="www.pappers.fr/"
      lastUpdated={new Date("2024-03-28T22:33:29.913Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pappers/favicon.png"
      // Missing contactUrl
      contactEmail="support@pappers.fr"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pappers/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","legal","legaltech","data"]}
      methods={[
  {
    "url": "/entreprise",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fiche entreprise",
    "typeScriptTag": "ficheEntreprise",
    "description": "Récupère l'ensemble des informations disponibles sur une entreprise.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise",
        "example": 443061841
      },
      {
        "name": "siret",
        "schema": "string",
        "required": false,
        "description": "SIRET de l'entreprise",
        "example": 44306184100047
      },
      {
        "name": "integrerDiffusionsPartielles",
        "schema": "boolean",
        "required": false,
        "description": "Si vrai et si l'entreprise est en diffusion partielle, le retour renverra les informations partielles disponibles. Valeur par défaut : `false`."
      },
      {
        "name": "formatPublicationsBodacc",
        "schema": "string",
        "required": false,
        "description": "Format attendu pour les publications BODACC. Valeur par défaut : `\"objet\"`.",
        "example": "objet"
      },
      {
        "name": "marques",
        "schema": "boolean",
        "required": false,
        "description": "Si vrai, le retour inclura les marques éventuelles de l'entreprise. Valeur par défaut : `false`."
      },
      {
        "name": "validiteTvaIntracommunautaire",
        "schema": "boolean",
        "required": false,
        "description": "Si vrai, le champ validite_tva_intracommunautaire du retour indiquera si le numéro de tva est valide auprès de la Commission européenne. Valeur par défaut : `false`."
      },
      {
        "name": "publicationsBodaccBrutes",
        "schema": "boolean",
        "required": false,
        "description": "Pappers traite les publications BODACC afin de supprimer les publications périmée. Si vrai, le retour inclura les publications bodacc sans traitement. Valeur par défaut : `false`."
      },
      {
        "name": "champsSupplementaires",
        "schema": "string",
        "required": false,
        "description": "Liste des champs supplémentaires à inclure dans le retour. Certains champs peuvent entraîner une consommation de jetons supplémentaires.\n\nChamps supplémentaires disponibles :\n- `sites_internet` : 1 jeton supplémentaire\n- `telephone` : 1 jeton supplémentaire *\n- `email` : 1 jeton supplémentaire *\n- `enseigne_1` : gratuit\n- `enseigne_2` : gratuit\n- `enseigne_3` : gratuit\n- `distribution_speciale` : gratuit\n- `code_cedex` : gratuit\n- `libelle_cedex` : gratuit\n- `code_commune` : gratuit\n- `code_region` : gratuit\n- `region` : gratuit\n- `code_departement` : gratuit\n- `departement` : gratuit\n- `nomenclature_code_naf` : gratuit\n- `labels` : gratuit\n- `labels:orias` : 0.5 jeton supplémentaire\n- `micro_entreprise` : gratuit\n- `sanctions` : 1 jeton supplémentaire\n- `personne_politiquement_exposee` : 1 jeton supplémentaire\n- `scoring_financier` : 10 jetons supplémentaires\n- `scoring_non_financier` : 10 jetons supplémentaires\n\n\\* : le coût des champs `telephone` et `email` est de 1 jeton supplémentaire au total, même si les deux sont demandés.\n",
        "example": "site_internet,telephone"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Entreprise inexistante."
      }
    ]
  },
  {
    "url": "/association",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fiche association",
    "typeScriptTag": "ficheAssociation",
    "description": "Récupère l'ensemble des informations disponibles sur une association.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "idAssociation",
        "schema": "string",
        "required": false,
        "description": "Identifiant de l'association",
        "example": "W142005389"
      },
      {
        "name": "siret",
        "schema": "string",
        "required": false,
        "description": "SIRET de l'association",
        "example": 95037097300014
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'association",
        "example": 950370973
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Association liée à l'entreprise."
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Association inexistante."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/recherche",
    "method": "criteriaEnterprisesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recherche",
    "typeScriptTag": "recherche",
    "description": "Recherche les entreprises qui correspondent à des critères.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page de résultats. Valeur par défaut : `1`.",
        "example": 1
      },
      {
        "name": "parPage",
        "schema": "integer",
        "required": false,
        "description": "Nombre de résultats affichés sur une page. Valeur par défaut : `10`.",
        "example": 20
      },
      {
        "name": "curseur",
        "schema": "string",
        "required": false,
        "description": "Curseur servant à parcourir l'ensemble des résultats (alternativement à la pagination qui est limitée à 400 résultats maximum). Doit valoir `*` pour la première requête, et doit pour les requêtes suivantes reprendre la valeur `curseurSuivant` retournée par la dernière réponse.",
        "example": "*"
      },
      {
        "name": "parCurseur",
        "schema": "integer",
        "required": false,
        "description": "Nombre de résultats affichés par curseur. Valeur par défaut : `50`. Valeur minimale: `1`. Valeur maximale : `1000`.",
        "example": 20
      },
      {
        "name": "bases",
        "schema": "string",
        "required": false,
        "description": "Bases de données dans lesquelles rechercher. Il est possible d'indiquer plusieurs bases en les séparant par des virgules. Valeur par défaut : `\"entreprises\"`.",
        "example": "entreprises"
      },
      {
        "name": "precision",
        "schema": "string",
        "required": false,
        "description": "Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.",
        "example": "standard"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Texte à rechercher. Dénomination pour une personne morale, nom et prénom pour une personne physique.\nSi vous recherchez dans plusieurs bases, ce paramètre sera utilisé pour rechercher dans toutes les bases.",
        "example": "Google France"
      },
      {
        "name": "siege",
        "schema": "string",
        "required": false,
        "description": "Défini si la requête se base sur le siège",
        "example": "true"
      },
      {
        "name": "codeNaf",
        "schema": "string",
        "required": false,
        "description": "Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.",
        "example": "70.10Z"
      },
      {
        "name": "departement",
        "schema": "string",
        "required": false,
        "description": "Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.",
        "example": 75
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.",
        "example": 11
      },
      {
        "name": "codePostal",
        "schema": "string",
        "required": false,
        "description": "Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.",
        "example": 75009
      },
      {
        "name": "conventionCollective",
        "schema": "string",
        "required": false,
        "description": "Convention collective de l'entreprise.",
        "example": 1486
      },
      {
        "name": "categorieJuridique",
        "schema": "string",
        "required": false,
        "description": "Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). \n\n**Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.",
        "example": 5499
      },
      {
        "name": "entrepriseCessee",
        "schema": "boolean",
        "required": false,
        "description": "Activité de l'entreprise cessée ou non.",
        "example": false
      },
      {
        "name": "statutRcs",
        "schema": "string",
        "required": false,
        "description": "Statut au RCS",
        "example": "inscrit"
      },
      {
        "name": "objetSocial",
        "schema": "string",
        "required": false,
        "description": "Objet social de l'entreprise déclaré au RCS.",
        "example": "La conception de moteurs de recherche sur internet."
      },
      {
        "name": "dateImmatriculationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateImmatriculationRcsMax",
        "schema": "string",
        "required": false,
        "description": "d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMax",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "capitalMin",
        "schema": "string",
        "required": false,
        "description": "Capital minimum de l'entreprise.",
        "example": 411016200
      },
      {
        "name": "capitalMax",
        "schema": "string",
        "required": false,
        "description": "Capital maximum de l'entreprise.",
        "example": 411016400
      },
      {
        "name": "chiffreAffairesMin",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016200
      },
      {
        "name": "chiffreAffairesMax",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016400
      },
      {
        "name": "resultatMin",
        "schema": "string",
        "required": false,
        "description": "Résultat minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327000
      },
      {
        "name": "resultatMax",
        "schema": "string",
        "required": false,
        "description": "Résultat maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327100
      },
      {
        "name": "dateCreationMin",
        "schema": "string",
        "required": false,
        "description": "Date de création minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateCreationMax",
        "schema": "string",
        "required": false,
        "description": "Date de création maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "trancheEffectifMin",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 40
      },
      {
        "name": "trancheEffectifMax",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 42
      },
      {
        "name": "typeDirigeant",
        "schema": "string",
        "required": false,
        "description": "Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "physique"
      },
      {
        "name": "qualiteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Administrateur"
      },
      {
        "name": "nationaliteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "nomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Yi"
      },
      {
        "name": "prenomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Kenneth H."
      },
      {
        "name": "ageDirigeantMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageDirigeantMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceDirigeantMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceDirigeantMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "ageBeneficiaireMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageBeneficiaireMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceBeneficiaireMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceBeneficiaireMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "nationaliteBeneficiaire",
        "schema": "string",
        "required": false,
        "description": "Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "dateDepotDocumentMin",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt minimale du document, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDepotDocumentMax",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt maximale du document, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      },
      {
        "name": "typePublication",
        "schema": "string",
        "required": false,
        "description": "Type de publication",
        "example": "Procédure collective"
      },
      {
        "name": "datePublicationMin",
        "schema": "string",
        "required": false,
        "description": "Date publication minimale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "datePublicationMax",
        "schema": "string",
        "required": false,
        "description": "Date de publication maximale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Aucune entreprise ne correspond aux critères indiqués."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/recherche-dirigeants",
    "method": "leadersSearchCriteriaGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recherche",
    "typeScriptTag": "recherche",
    "description": "Recherche les dirigeants qui correspondent à des critères.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "parPage",
        "schema": "integer",
        "required": false,
        "description": "Nombre de résultats affichés sur une page. Valeur par défaut : `10`.",
        "example": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page de résultats. Valeur par défaut : `1`.",
        "example": 1
      },
      {
        "name": "precision",
        "schema": "string",
        "required": false,
        "description": "Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.",
        "example": "standard"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Texte à rechercher. Nom et prénom du dirigeant pour une personne physique, dénomination pour une personne morale.",
        "example": "Google France"
      },
      {
        "name": "typeDirigeant",
        "schema": "string",
        "required": false,
        "description": "Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "physique"
      },
      {
        "name": "qualiteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Administrateur"
      },
      {
        "name": "nationaliteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "nomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Yi"
      },
      {
        "name": "prenomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Kenneth H."
      },
      {
        "name": "ageDirigeantMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageDirigeantMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceDirigeantMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceDirigeantMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "codeNaf",
        "schema": "string",
        "required": false,
        "description": "Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.",
        "example": "70.10Z"
      },
      {
        "name": "departement",
        "schema": "string",
        "required": false,
        "description": "Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.",
        "example": 75
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.",
        "example": 11
      },
      {
        "name": "codePostal",
        "schema": "string",
        "required": false,
        "description": "Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.",
        "example": 75009
      },
      {
        "name": "conventionCollective",
        "schema": "string",
        "required": false,
        "description": "Convention collective de l'entreprise.",
        "example": 1486
      },
      {
        "name": "categorieJuridique",
        "schema": "string",
        "required": false,
        "description": "Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). \n\n**Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.",
        "example": 5499
      },
      {
        "name": "entrepriseCessee",
        "schema": "boolean",
        "required": false,
        "description": "Activité de l'entreprise cessée ou non.",
        "example": false
      },
      {
        "name": "statutRcs",
        "schema": "string",
        "required": false,
        "description": "Statut au RCS",
        "example": "inscrit"
      },
      {
        "name": "objetSocial",
        "schema": "string",
        "required": false,
        "description": "Objet social de l'entreprise déclaré au RCS.",
        "example": "La conception de moteurs de recherche sur internet."
      },
      {
        "name": "dateImmatriculationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateImmatriculationRcsMax",
        "schema": "string",
        "required": false,
        "description": "d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMax",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "capitalMin",
        "schema": "string",
        "required": false,
        "description": "Capital minimum de l'entreprise.",
        "example": 411016200
      },
      {
        "name": "capitalMax",
        "schema": "string",
        "required": false,
        "description": "Capital maximum de l'entreprise.",
        "example": 411016400
      },
      {
        "name": "chiffreAffairesMin",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016200
      },
      {
        "name": "chiffreAffairesMax",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016400
      },
      {
        "name": "resultatMin",
        "schema": "string",
        "required": false,
        "description": "Résultat minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327000
      },
      {
        "name": "resultatMax",
        "schema": "string",
        "required": false,
        "description": "Résultat maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327100
      },
      {
        "name": "dateCreationMin",
        "schema": "string",
        "required": false,
        "description": "Date de création minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateCreationMax",
        "schema": "string",
        "required": false,
        "description": "Date de création maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "trancheEffectifMin",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 40
      },
      {
        "name": "trancheEffectifMax",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 42
      },
      {
        "name": "ageBeneficiaireMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageBeneficiaireMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceBeneficiaireMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceBeneficiaireMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "nationaliteBeneficiaire",
        "schema": "string",
        "required": false,
        "description": "Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "dateDepotDocumentMin",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt minimale du document, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDepotDocumentMax",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt maximale du document, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      },
      {
        "name": "typePublication",
        "schema": "string",
        "required": false,
        "description": "Type de publication",
        "example": "Procédure collective"
      },
      {
        "name": "datePublicationMin",
        "schema": "string",
        "required": false,
        "description": "Date publication minimale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "datePublicationMax",
        "schema": "string",
        "required": false,
        "description": "Date de publication maximale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise.",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Aucun dirigeant ne correspond aux critères indiqués."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/recherche-beneficiaires",
    "method": "effectiveBeneficiariesSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recherche",
    "typeScriptTag": "recherche",
    "description": "Recherche les bénéficiaires effectifs qui correspondent à des critères.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "parPage",
        "schema": "integer",
        "required": false,
        "description": "Nombre de résultats affichés sur une page. Valeur par défaut : `10`.",
        "example": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page de résultats. Valeur par défaut : `1`.",
        "example": 1
      },
      {
        "name": "precision",
        "schema": "string",
        "required": false,
        "description": "Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.",
        "example": "standard"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Nom et/ou prénom du bénéficiaire effectif.",
        "example": "Xavier Niel"
      },
      {
        "name": "ageBeneficiaireMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageBeneficiaireMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceBeneficiaireMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceBeneficiaireMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "nationaliteBeneficiaire",
        "schema": "string",
        "required": false,
        "description": "Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "codeNaf",
        "schema": "string",
        "required": false,
        "description": "Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.",
        "example": "70.10Z"
      },
      {
        "name": "departement",
        "schema": "string",
        "required": false,
        "description": "Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.",
        "example": 75
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.",
        "example": 11
      },
      {
        "name": "codePostal",
        "schema": "string",
        "required": false,
        "description": "Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.",
        "example": 75009
      },
      {
        "name": "conventionCollective",
        "schema": "string",
        "required": false,
        "description": "Convention collective de l'entreprise.",
        "example": 1486
      },
      {
        "name": "categorieJuridique",
        "schema": "string",
        "required": false,
        "description": "Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). \n\n**Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.",
        "example": 5499
      },
      {
        "name": "entrepriseCessee",
        "schema": "boolean",
        "required": false,
        "description": "Activité de l'entreprise cessée ou non.",
        "example": false
      },
      {
        "name": "statutRcs",
        "schema": "string",
        "required": false,
        "description": "Statut au RCS",
        "example": "inscrit"
      },
      {
        "name": "objetSocial",
        "schema": "string",
        "required": false,
        "description": "Objet social de l'entreprise déclaré au RCS.",
        "example": "La conception de moteurs de recherche sur internet."
      },
      {
        "name": "dateImmatriculationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateImmatriculationRcsMax",
        "schema": "string",
        "required": false,
        "description": "d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMax",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "capitalMin",
        "schema": "string",
        "required": false,
        "description": "Capital minimum de l'entreprise.",
        "example": 411016200
      },
      {
        "name": "capitalMax",
        "schema": "string",
        "required": false,
        "description": "Capital maximum de l'entreprise.",
        "example": 411016400
      },
      {
        "name": "chiffreAffairesMin",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016200
      },
      {
        "name": "chiffreAffairesMax",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016400
      },
      {
        "name": "resultatMin",
        "schema": "string",
        "required": false,
        "description": "Résultat minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327000
      },
      {
        "name": "resultatMax",
        "schema": "string",
        "required": false,
        "description": "Résultat maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327100
      },
      {
        "name": "dateCreationMin",
        "schema": "string",
        "required": false,
        "description": "Date de création minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateCreationMax",
        "schema": "string",
        "required": false,
        "description": "Date de création maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "trancheEffectifMin",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 40
      },
      {
        "name": "trancheEffectifMax",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 42
      },
      {
        "name": "typeDirigeant",
        "schema": "string",
        "required": false,
        "description": "Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "physique"
      },
      {
        "name": "qualiteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Administrateur"
      },
      {
        "name": "nationaliteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "nomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Yi"
      },
      {
        "name": "prenomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Kenneth H."
      },
      {
        "name": "ageDirigeantMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageDirigeantMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceDirigeantMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceDirigeantMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "dateDepotDocumentMin",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt minimale du document, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDepotDocumentMax",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt maximale du document, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      },
      {
        "name": "typePublication",
        "schema": "string",
        "required": false,
        "description": "Type de publication",
        "example": "Procédure collective"
      },
      {
        "name": "datePublicationMin",
        "schema": "string",
        "required": false,
        "description": "Date publication minimale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "datePublicationMax",
        "schema": "string",
        "required": false,
        "description": "Date de publication maximale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise.",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Aucun bénéficiaire effectif ne correspond aux critères indiqués."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/recherche-documents",
    "method": "matchingDocumentsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recherche",
    "typeScriptTag": "recherche",
    "description": "Recherche les documents qui correspondent à des critères.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "parPage",
        "schema": "integer",
        "required": false,
        "description": "Nombre de résultats affichés sur une page. Valeur par défaut : `10`.",
        "example": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page de résultats. Valeur par défaut : `1`.",
        "example": 1
      },
      {
        "name": "precision",
        "schema": "string",
        "required": false,
        "description": "Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.",
        "example": "standard"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Mot-clé à rechercher dans le contenu du document.",
        "example": "Rémunération"
      },
      {
        "name": "dateDepotDocumentMin",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt minimale du document, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDepotDocumentMax",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt maximale du document, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      },
      {
        "name": "codeNaf",
        "schema": "string",
        "required": false,
        "description": "Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.",
        "example": "70.10Z"
      },
      {
        "name": "departement",
        "schema": "string",
        "required": false,
        "description": "Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.",
        "example": 75
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.",
        "example": 11
      },
      {
        "name": "codePostal",
        "schema": "string",
        "required": false,
        "description": "Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.",
        "example": 75009
      },
      {
        "name": "conventionCollective",
        "schema": "string",
        "required": false,
        "description": "Convention collective de l'entreprise.",
        "example": 1486
      },
      {
        "name": "categorieJuridique",
        "schema": "string",
        "required": false,
        "description": "Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). \n\n**Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.",
        "example": 5499
      },
      {
        "name": "entrepriseCessee",
        "schema": "boolean",
        "required": false,
        "description": "Activité de l'entreprise cessée ou non.",
        "example": false
      },
      {
        "name": "statutRcs",
        "schema": "string",
        "required": false,
        "description": "Statut au RCS",
        "example": "inscrit"
      },
      {
        "name": "objetSocial",
        "schema": "string",
        "required": false,
        "description": "Objet social de l'entreprise déclaré au RCS.",
        "example": "La conception de moteurs de recherche sur internet."
      },
      {
        "name": "dateImmatriculationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateImmatriculationRcsMax",
        "schema": "string",
        "required": false,
        "description": "d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMax",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "capitalMin",
        "schema": "string",
        "required": false,
        "description": "Capital minimum de l'entreprise.",
        "example": 411016200
      },
      {
        "name": "capitalMax",
        "schema": "string",
        "required": false,
        "description": "Capital maximum de l'entreprise.",
        "example": 411016400
      },
      {
        "name": "chiffreAffairesMin",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016200
      },
      {
        "name": "chiffreAffairesMax",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016400
      },
      {
        "name": "resultatMin",
        "schema": "string",
        "required": false,
        "description": "Résultat minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327000
      },
      {
        "name": "resultatMax",
        "schema": "string",
        "required": false,
        "description": "Résultat maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327100
      },
      {
        "name": "dateCreationMin",
        "schema": "string",
        "required": false,
        "description": "Date de création minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateCreationMax",
        "schema": "string",
        "required": false,
        "description": "Date de création maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "trancheEffectifMin",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 40
      },
      {
        "name": "trancheEffectifMax",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 42
      },
      {
        "name": "typeDirigeant",
        "schema": "string",
        "required": false,
        "description": "Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "physique"
      },
      {
        "name": "qualiteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Administrateur"
      },
      {
        "name": "nationaliteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "nomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Yi"
      },
      {
        "name": "prenomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Kenneth H."
      },
      {
        "name": "ageDirigeantMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageDirigeantMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceDirigeantMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceDirigeantMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "ageBeneficiaireMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageBeneficiaireMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceBeneficiaireMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceBeneficiaireMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "nationaliteBeneficiaire",
        "schema": "string",
        "required": false,
        "description": "Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "typePublication",
        "schema": "string",
        "required": false,
        "description": "Type de publication",
        "example": "Procédure collective"
      },
      {
        "name": "datePublicationMin",
        "schema": "string",
        "required": false,
        "description": "Date publication minimale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "datePublicationMax",
        "schema": "string",
        "required": false,
        "description": "Date de publication maximale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise.",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Aucun document ne correspond aux critères indiqués."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/recherche-publications",
    "method": "matchingPublicationsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recherche",
    "typeScriptTag": "recherche",
    "description": "Recherche les publications BODACC qui correspondent à des critères.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "parPage",
        "schema": "integer",
        "required": false,
        "description": "Nombre de résultats affichés sur une page. Valeur par défaut : `10`.",
        "example": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page de résultats. Valeur par défaut : `1`.",
        "example": 1
      },
      {
        "name": "precision",
        "schema": "string",
        "required": false,
        "description": "Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.",
        "example": "standard"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Mot-clé à rechercher dans le contenu de la publication.",
        "example": "Liquidation"
      },
      {
        "name": "codeNaf",
        "schema": "string",
        "required": false,
        "description": "Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.",
        "example": "70.10Z"
      },
      {
        "name": "departement",
        "schema": "string",
        "required": false,
        "description": "Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.",
        "example": 75
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.",
        "example": 11
      },
      {
        "name": "codePostal",
        "schema": "string",
        "required": false,
        "description": "Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.",
        "example": 75009
      },
      {
        "name": "conventionCollective",
        "schema": "string",
        "required": false,
        "description": "Convention collective de l'entreprise.",
        "example": 1486
      },
      {
        "name": "categorieJuridique",
        "schema": "string",
        "required": false,
        "description": "Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129). \n\n**Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.",
        "example": 5499
      },
      {
        "name": "entrepriseCessee",
        "schema": "boolean",
        "required": false,
        "description": "Activité de l'entreprise cessée ou non.",
        "example": false
      },
      {
        "name": "statutRcs",
        "schema": "string",
        "required": false,
        "description": "Statut au RCS",
        "example": "inscrit"
      },
      {
        "name": "objetSocial",
        "schema": "string",
        "required": false,
        "description": "Objet social de l'entreprise déclaré au RCS.",
        "example": "La conception de moteurs de recherche sur internet."
      },
      {
        "name": "dateImmatriculationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateImmatriculationRcsMax",
        "schema": "string",
        "required": false,
        "description": "d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMin",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateRadiationRcsMax",
        "schema": "string",
        "required": false,
        "description": "Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "capitalMin",
        "schema": "string",
        "required": false,
        "description": "Capital minimum de l'entreprise.",
        "example": 411016200
      },
      {
        "name": "capitalMax",
        "schema": "string",
        "required": false,
        "description": "Capital maximum de l'entreprise.",
        "example": 411016400
      },
      {
        "name": "chiffreAffairesMin",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016200
      },
      {
        "name": "chiffreAffairesMax",
        "schema": "string",
        "required": false,
        "description": "Chiffre d'affaires maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 411016400
      },
      {
        "name": "resultatMin",
        "schema": "string",
        "required": false,
        "description": "Résultat minimum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327000
      },
      {
        "name": "resultatMax",
        "schema": "string",
        "required": false,
        "description": "Résultat maximum de l'entreprise.\n\n**Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.",
        "example": 29327100
      },
      {
        "name": "dateCreationMin",
        "schema": "string",
        "required": false,
        "description": "Date de création minimale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "15-05-2002"
      },
      {
        "name": "dateCreationMax",
        "schema": "string",
        "required": false,
        "description": "Date de création maximale de l'entreprise, au format JJ-MM-AAAA.",
        "example": "17-05-2002"
      },
      {
        "name": "trancheEffectifMin",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 40
      },
      {
        "name": "trancheEffectifMax",
        "schema": "string",
        "required": false,
        "description": "Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).\n\n**Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur",
        "example": 42
      },
      {
        "name": "typeDirigeant",
        "schema": "string",
        "required": false,
        "description": "Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "physique"
      },
      {
        "name": "qualiteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Administrateur"
      },
      {
        "name": "nationaliteDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "nomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Nom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Yi"
      },
      {
        "name": "prenomDirigeant",
        "schema": "string",
        "required": false,
        "description": "Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": "Kenneth H."
      },
      {
        "name": "ageDirigeantMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageDirigeantMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceDirigeantMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceDirigeantMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "ageBeneficiaireMin",
        "schema": "integer",
        "required": false,
        "description": "Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 40
      },
      {
        "name": "ageBeneficiaireMax",
        "schema": "integer",
        "required": false,
        "description": "Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": 42
      },
      {
        "name": "dateDeNaissanceBeneficiaireMin",
        "schema": "string",
        "required": false,
        "description": "Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.",
        "example": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDeNaissanceBeneficiaireMax",
        "schema": "string",
        "required": false,
        "description": "Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.",
        "example": "1970-12-31T00:00:00.000Z"
      },
      {
        "name": "nationaliteBeneficiaire",
        "schema": "string",
        "required": false,
        "description": "Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).",
        "example": "Française"
      },
      {
        "name": "dateDepotDocumentMin",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt minimale du document, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "dateDepotDocumentMax",
        "schema": "string",
        "required": false,
        "description": "Date de dépôt maximale du document, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      },
      {
        "name": "typePublication",
        "schema": "string",
        "required": false,
        "description": "Type de publication",
        "example": "Procédure collective"
      },
      {
        "name": "datePublicationMin",
        "schema": "string",
        "required": false,
        "description": "Date publication minimale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-01-01T00:00:00.000Z"
      },
      {
        "name": "datePublicationMax",
        "schema": "string",
        "required": false,
        "description": "Date de publication maximale de la publication, au format JJ-MM-AAAA.",
        "example": "2000-12-31T00:00:00.000Z"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise.",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Aucune publication ne correspond aux critères indiqués."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/suggestions",
    "method": "searchText",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suggestions / Autocomplete",
    "typeScriptTag": "suggestionsAutocomplete",
    "description": "Recherche les entreprises qui correspondent à un début de recherche textuelle (type autocomplete).",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": "Début de recherche textuelle",
        "example": "googl"
      },
      {
        "name": "longueur",
        "schema": "integer",
        "required": false,
        "description": "Nombre de résultats. Maximum 100. Valeur par défaut : `10`.",
        "example": 20
      },
      {
        "name": "cibles",
        "schema": "string",
        "required": false,
        "description": "Cibles de la recherche, séparées par des virgules. Valeur par défaut : `\"nom_entreprise\"`.",
        "example": "nom_entreprise,siren,siret"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      }
    ]
  },
  {
    "url": "/entreprise/comptes",
    "method": "getBySiren",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comptes annuels",
    "typeScriptTag": "comptesAnnuels",
    "description": "Récupère les comptes annuels publiés d'une entreprise.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise",
        "example": 443061841
      },
      {
        "name": "annee",
        "schema": "string",
        "required": false,
        "description": "Année de cloture des comptes souhaités. Il est possible d'indiquer plusieurs années en les séparant par des virgules. Si le paramètre n'est pas fourni, toutes les années disponibles seront retournées.",
        "example": "2016,2017,2018"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Comptes annuels indisponibles."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/entreprise/cartographie",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cartographie",
    "typeScriptTag": "cartographie",
    "description": "Récupère les données permettant d'établir une cartographie d'une entreprise.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": true,
        "description": "SIREN de l'entreprise",
        "example": 443061841
      },
      {
        "name": "inclureEntreprisesDirigees",
        "schema": "boolean",
        "required": false,
        "description": "Si vrai, la cartographie intègrera les entreprises dirigées par l'entreprise recherchée et les entreprises qui dirigent l'entreprise recherchée. Valeur par défaut : `true`."
      },
      {
        "name": "inclureEntreprisesCitees",
        "schema": "boolean",
        "required": false,
        "description": "Si vrai, la cartographie intègrera les entreprises citées conjointement avec l'entreprise recherchée dans des actes et statuts. Valeur par défaut : `false`."
      },
      {
        "name": "inclureSci",
        "schema": "boolean",
        "required": false,
        "description": "Si vrai, la cartographie intègrera les SCI. Valeur par défaut : `true`."
      },
      {
        "name": "autoriserModifications",
        "schema": "boolean",
        "required": false,
        "description": "Si vrai, la cartographie pourra adapter automatiquement ses paramètres si ceux choisis manuellement ne sont pas idéaux. Valeur par défaut : `false`."
      },
      {
        "name": "rejeterPremierDegre",
        "schema": "boolean",
        "required": false,
        "description": "Si vrai et que la cartographie ne fait apparaître que l'entreprise recherchée ainsi que ses dirigeants directs, une erreur 404 sera renvoyée et la requête ne sera pas comptabilisée dans le quota de jetons. Valeur par défaut : `false`."
      },
      {
        "name": "degre",
        "schema": "integer",
        "required": false,
        "description": "Permet de choisir manuellement un degré pour la cartographie. Seuls deux états sont possibles : un nombre <= 2 ou bien un nombre > 2. Cela veut dire que 0, 1 ou 2 donneront la même cartographie, tout comme 3, 4 ou 5."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "La cartographie n'est pas disponible car elle ne contient qu'un seul noeud ou bien le paramètre `rejeter_premier_degre` a été utilisé."
      }
    ]
  },
  {
    "url": "/document/telechargement",
    "method": "downloadDocumentByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Télécharge un document PDF ou XLSX à partir de son token.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Token du document",
        "example": "QTQ0MzA2MTg0MTIwMjAwNDA3RMOpY2lzaW9uKHMpIGRlIGwnYXNzb2Npw6kgdW5pcXVl"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Document indisponible."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/document/extrait_pappers",
    "method": "downloadPappersExtrait",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Télécharge l'extrait Pappers d'une entreprise à partir de son SIREN ou SIRET.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise",
        "example": 443061841
      },
      {
        "name": "siret",
        "schema": "string",
        "required": false,
        "description": "SIRET de l'entreprise",
        "example": 44306184100047
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Document indisponible."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/document/extrait_inpi",
    "method": "getExtraitInpi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Télécharge l'extrait INPI d'une entreprise à partir de son SIREN ou SIRET.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise",
        "example": 443061841
      },
      {
        "name": "siret",
        "schema": "string",
        "required": false,
        "description": "SIRET de l'entreprise",
        "example": 44306184100047
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Document indisponible."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/document/avis_situation_insee",
    "method": "downloadInseeSituation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Télécharge l'avis de situation INSEE d'une entreprise à partir de son SIREN ou SIRET.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise",
        "example": 443061841
      },
      {
        "name": "siret",
        "schema": "string",
        "required": false,
        "description": "SIRET de l'entreprise",
        "example": 44306184100047
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Document indisponible."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/document/statuts",
    "method": "telechargementStatuts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Télécharge les derniers statuts disponibles d'une entreprise à partir de son SIREN ou SIRET.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise",
        "example": 443061841
      },
      {
        "name": "siret",
        "schema": "string",
        "required": false,
        "description": "SIRET de l'entreprise",
        "example": 44306184100047
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Document indisponible."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/document/declaration_beneficiaires_effectifs",
    "method": "telechargementBeneficiairesEffectifs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Télécharge la déclaration des bénéficiaires effectifs d'une entreprise à partir de son SIREN.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise",
        "example": 443061841
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "403",
        "description": "Vous n'avez pas les droits pour exécuter cette requête."
      },
      {
        "statusCode": "404",
        "description": "Document indisponible."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/document/rapport_solvabilite",
    "method": "downloadSolvabilityReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Télécharge un Rapport de solvabilité d'une entreprise à partir de son SIREN.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "SIREN de l'entreprise",
        "example": 443061841
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Document indisponible."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/conformite/personne_physique",
    "method": "personnePhysiqueStatusCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conformité",
    "typeScriptTag": "conformité",
    "description": "Vérifie le statut de personne politiquement exposée et la présence de sanctions internationales pour une personne physique.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "nom",
        "schema": "string",
        "required": true,
        "description": "Nom de la personne physique",
        "example": "Macron"
      },
      {
        "name": "prenom",
        "schema": "string",
        "required": true,
        "description": "Prénom de la personne physique",
        "example": "Emmanuel"
      },
      {
        "name": "dateDeNaissance",
        "schema": "string",
        "required": true,
        "description": "Date de naissance de la personne physique, au format AAAA-MM-JJ ou AAAA-MM",
        "example": "1977-12-21T00:00:00.000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "503",
        "description": "Erreur interne. La personne physique n'a pas pu être vérifiée."
      }
    ]
  },
  {
    "url": "/suivi-jetons",
    "method": "getTokenUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suivi utilisation",
    "typeScriptTag": "suiviUtilisation",
    "description": "Récupère le suivi d'utilisation des jetons.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Suivi d'utilisation des jetons."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/liste",
    "method": "listDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Surveillance",
    "typeScriptTag": "surveillance",
    "description": "Supprime une (ou plusieurs) notification(https://www.pappers.fr/api/documentation d'une liste.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "idListe",
        "schema": "string",
        "required": true,
        "description": "Identifiant unique de votre liste de surveillance",
        "example": "votre_identifiant_ici"
      },
      {
        "name": "siren",
        "schema": "string",
        "required": false,
        "description": "Liste des sirens des notifications à supprimer, séparés par une virgule",
        "example": "443061841,950370973"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Liste des ids des notifications à supprimer, séparés par une virgule",
        "example": "ecfca3e5fb1ce07bb3fdfe8760a28df5aa617ed4951b7f61,a67b9de66189ba98eb4aede09f4b2b565b0f18fe694da7bc"
      },
      {
        "name": "supprimerTotalite",
        "schema": "boolean",
        "required": false,
        "description": "Suppression de toutes les notifications de la liste",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Nombre de notifications supprimées."
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Liste non trouvée."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/liste",
    "method": "listeDirigeantsAjout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Surveillance",
    "typeScriptTag": "surveillance",
    "description": "Ajoute un (ou plusieurs) dirigeant(https://www.pappers.fr/api/documentation à une liste de dirigeants.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "idListe",
        "schema": "string",
        "required": true,
        "description": "Identifiant unique de votre liste de surveillance de dirigeants",
        "example": "votre_identifiant_ici"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Nombre de notifications ajoutées."
      },
      {
        "statusCode": "201",
        "description": "Nombre de notifications ajoutées."
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "403",
        "description": "Offre dépassée."
      },
      {
        "statusCode": "404",
        "description": "Liste non trouvée."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  },
  {
    "url": "/liste-informations",
    "method": "addNotifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Surveillance",
    "typeScriptTag": "surveillance",
    "description": "Ajoute des informations à une (ou plusieurs) notification(https://www.pappers.fr/api/documentation.",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "Clé d'utilisation de l'API",
        "example": "votre_clé_ici"
      },
      {
        "name": "idListe",
        "schema": "string",
        "required": true,
        "description": "Identifiant unique de votre liste de surveillance d'entreprises",
        "example": "votre_identifiant_ici"
      },
      {
        "name": "notifications",
        "schema": "array",
        "description": ""
      },
      {
        "name": "informations",
        "schema": "string",
        "description": "",
        "example": "Information quelconque"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Succés."
      },
      {
        "statusCode": "400",
        "description": "Paramètres de la requête incorrects."
      },
      {
        "statusCode": "401",
        "description": "Clé API incorrecte."
      },
      {
        "statusCode": "404",
        "description": "Liste non trouvée."
      },
      {
        "statusCode": "503",
        "description": "Service momentanément indisponible."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Pappers API"
      apiBaseUrl="https://api.pappers.fr/v2"
      apiVersion="2.13.0"
      endpoints={22}
      sdkMethods={23}
      schemas={53}
      parameters={306}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pappers/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pappers/openapi.yaml"
      developerDocumentation="www.pappers.fr/api/documentation"
    />
  );
}
  