/**
 * @swagger
 * components:
 *   schemas:
 *     ClientError:
 *       type: object
 *       properties:
 *         error:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The name of error
 *             message:
 *               type: string
 *               description: The error definition
 *             errorList:
 *               type: array
 *               description: The list of invalid fields
 *             code:
 *               type: number
 *               description: The code of response status
 *           description: The error object
 *       example:
 *         error: {
 *           name: Bad request,
 *           message: Not correct params in the request,
 *           errorList: [
 *             {
 *               value: -5,
 *               msg: Param page must be greater than 1,
 *               param: page,
 *               location: query
 *             }
 *           ],
 *           code: 400
 *         }
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ServerError:
 *       type: object
 *       properties:
 *         error:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The name of error
 *             message:
 *               type: string
 *               description: The error definition
 *             code:
 *               type: number
 *               description: The code of response status
 *           description: The error object
 *       example:
 *         error: {
 *           name: Server error,
 *           message: Cannot connect to database,
 *           code: 500
 *         }
 */
