import { Project } from "./Project";
import imag1 from "../../public/assets/placeimg_500_300_arch1.jpg";
import imag2 from "../../public/assets/placeimg_500_300_arch2.jpg";
import imag3 from "../../public/assets/placeimg_500_300_arch3.jpg";
import imag4 from "../../public/assets/placeimg_500_300_arch4.jpg";
import imag5 from "../../public/assets/placeimg_500_300_arch5.jpg";
import imag6 from "../../public/assets/placeimg_500_300_arch6.jpg";


export const MOCK_PROJECT = [
    new Project({
        id: 1,
        name: 'Johnson - Kutch',
        description: 'Fully-configurable intermediate framework. Ullam occaecati libero laudantium nihil voluptas omnis.',
        imageUrl: imag1,
        contractTypeId: 6,
        contractSignedOn: '2016-06-26T18:24:01.706Z', 
        budget: 29729,
        isActive: true
    }),
    new Project({
        id: 2,
        name: 'Wisozk Group',
        description: 'Centralized interactive application. Exercitationem nulla ut ipsam vero quasi enim quos doloribus voluptatibus.',
        imageUrl: imag2,
        contractTypeId: 4,
        contractSignedOn: '2012-08-06T21:21:31.419Z', 
        budget: 91638,
        isActive: true
    }),
    new Project({
        id: 3,
        name: 'Denesik LLC',
        description: 'Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.',
        imageUrl: imag3,
        contractTypeId: 6,
        contractSignedOn: '2016-06-26T18:24:01.706Z',
        budget: 29729,
        isActive: true
    }),
    new Project({
        id: 4,
        name: 'Purdy, Keeling and Smitham',
        description: 'Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.',
        imageUrl: imag4, 
        contractTypeId: 4,
        contractSignedOn: '2016-06-26T18:24:01.706Z',
        budget: 29729,
        isActive: true
    }),
    new Project({
        id: 5,
        name: 'Kreiger - Waelchi',
        description: 'Managed logistical migration. Qui quod praesentium accusamus eos hic non error modi et.',
        imageUrl: imag5, 
        contractTypeId: 2,
        contractSignedOn: '2009-12-18T21:46:47.944Z',
        budget: 81188,
        isActive: true
    }),
    new Project({
        id: 6,
        name: 'Lesch - Waelchi',
        description: 'Profound mobile project. Rem consequatur laborum explicabo sint odit et illo voluptas expedita.',
        imageUrl: imag6, 
        contractTypeId: 3,
        contractSignedOn: '2016-09-23T21:27:25.035Z',
        budget: 53407,
        isActive: false
    })
];
