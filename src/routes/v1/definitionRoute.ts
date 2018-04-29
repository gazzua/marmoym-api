import { Router, Request, Response } from 'express'

import asyncWrapper from '@middlewares/asyncWrapper';
import ApiURL from '@models/ApiURL';
import db from '@database/db';
// import DefinitionAddService from '@services/Definition/DefinitionAddController';
import DefinitionGetService from '@services/Definition/DefinitionGetService';
import DefinitionGetParam from '@models/definition/DefinitionGetParam';
import { requireNonEmpty, optional } from '@src/utils/objectUtils';

function definitionRoute(router) {
  router.route(ApiURL.DEFINITIONS)
    /**
     * /api/v1/definitions
     * Definitions 가져오기
     */
    .post((asyncWrapper(async (req, res) => {
      const param = new DefinitionGetParam({
        page: optional(req.body.page).orElse(1),
        // page: optional(req.body.page).orElse(1),
        search: req.body.search,
      });
      
      return DefinitionGetService.getDefinitions(param);
    })));

  // router.route(ApiURL.DEFINITIONS_NEW)
  //   /**
  //    * Definition 등록
  //    */
  //   .post((request: Request, response: Response) => {
  //     const req = request.body;
  //     const payload = DefinitionAddController.addDefinition(req);

  //     respond(response, payload);
  //   })

  // router.route(ApiURL.DEFINITIONS_IDS)
  //   /**
  //    * 최신 Definitions 가져오기
  //    */
  //   .get((request: Request, response: Response) => {
  //     const param: GetDefinitionIdsParam = request['$param'];
  //     let payload;
  //     if (param.defIds.length) {
  //       payload = DefinitionGetController.getDefinitionIds(param);
  //     } else {
  //       payload = DefinitionGetController.getRecentlyUpdatedDefinitionIds(param);
  //     }
  //     respond(response, payload, 'defIds');
  //   })

//   router.route(ApiURL.SEARCH)
//     /**
//      * Definition 검색
//      */
//     .get((request: Request, response: Response) => {
//       const req = request.query;
//       const payload = DefinitionGetController.getDefinitionIdsBySearch(req);

//       respond(response, payload, 'defIds');
//     })
// }
}

export default definitionRoute;
