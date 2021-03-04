import EditorActionsManager from "../managers/EditorActionsManager";
export default class CBioPortalAccessor {
    static readonly CNA_GAIN = 2;
    static readonly GET_ALL_CANCER_STUDIES_URL = "https://www.cbioportal.org/webservice.do?cmd=getCancerStudies";
    static readonly GET_GENETIC_PROFILES_URL = "https://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=";
    static readonly GET_PROFILE_DATA_URL = "https://www.cbioportal.org/webservice.do?cmd=getProfileData";
    static readonly MRNA_EXP_STUDY_NAME = "_mrna_median_Zscores";
    static readonly CNA_EXP_STUDY_NAME = "_gistic";
    static readonly VALIDATE_GENES_URL = "https://www.cbioportal.org/api/genes/fetch?geneIdType=HUGO_GENE_SYMBOL&projection=ID";
    static readonly MUTATION_EXP_STUDY_NAME = "_mutations";
    static readonly CNA_DELETION = -2;
    static readonly Z_SCORE_UPPER_THRESHOLD = 2;
    static readonly Z_SCORE_LOWER_THRESHOLD = -2;
    static readonly MUTATION = "Mutation";
    static readonly GENE_EXPRESSION = "Gene Expression";
    static readonly CNA = "Copy Number Alteration";
    getDataTypes(): string[];
    fetchCancerStudies(callbackFunction: any): void;
    /**
    * Retrieves all genetic profiles for given cancerStudy from cBioPortal
    */
    getSupportedGeneticProfiles(cancerStudy: any, callbackFunction: any): void;
    isSupportedCancerProfile(cancerProfileName: string): boolean;
    static getDataType(cancerProfileName: string): "" | "Mutation" | "Gene Expression" | "Copy Number Alteration";
    calcAlterationPercentages(paramLines: any, geneticProfileId: any, callbackFunction: any): void;
    getProfileData(params: any, callbackFunction: any): void;
    validateGenes(nodeSymbols: any, editor: EditorActionsManager): void;
}
