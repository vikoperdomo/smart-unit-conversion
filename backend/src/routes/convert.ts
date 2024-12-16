import { Router, Request, Response } from 'express';
import { validateConversion } from '../services/conversionService';
import { ConversionRequest } from '../types/conversion';

const router = Router();
/**
 * Endpoint to handle unit conversion validation requests.
 *
 * @route POST /api/convert
 * @param req - The HTTP request object containing the conversion data.
 * @param res - The HTTP response object.
 * @returns JSON response with the validation result.
 */
router.post('/convert', (req: Request, res: Response) => {
  try {
    const request: ConversionRequest = req.body;
    const result = validateConversion(request);
    res.json(result);
  } catch (error) {
    const message = (error as Error).message;
    if (message === 'Invalid input or target unit') {
      res.status(400).json({ error: message });
    } else {
      res.status(500).json({ error: 'Unexpected error occurred' });
    }
  }
});

export default router;
