using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using murphy.vpo.API.DTOs;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace murphy.vpo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaxRatesController : ControllerBase
    {
        private readonly ITaxRateService _taxRateService;
        private readonly IMapper _mapper;

        public TaxRatesController(ITaxRateService taxRateService, IMapper mapper)
        {
            _taxRateService = taxRateService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetTaxRatesAsync")]
        public async Task<ActionResult<List<TaxRateDto>>> GetCompanysAsync()
        {
            var taxRates = await _taxRateService.GetAllAsync();
            if (taxRates == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<TaxRateDto>>(taxRates));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetTaxRateByIdAsync")]
        public async Task<ActionResult<UserDto>> GetTaxRateByIdAsync(int id)
        {
            var taxRate = await _taxRateService.GetByIdAsync(id);
            if (taxRate == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<TaxRateDto>(taxRate));
        }
        // POST api/values
        [HttpPost(Name = "AddTaxRateAsync")]
        public async Task<ActionResult<TaxRateDto>> AddTaxRateAsync(TaxRateDto taxRateDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var taxRate = _mapper.Map<TaxRate>(taxRateDto);

            await _taxRateService.AddAsync(taxRate);
            return CreatedAtRoute("GetTaxRateByIdAsync", new { id = taxRate.Id }, _mapper.Map<TaxRateDto>(taxRate));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateTaxRateAsync")]
        public async Task<ActionResult<TaxRateDto>> UpdateTaxRateAsync(int id, [FromBody] TaxRateDto taxRateDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != taxRateDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _taxRateService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var taxRate = _mapper.Map<TaxRate>(taxRateDto);
            await _taxRateService.UpdateAsync(taxRate);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveTaxRateAsync")]
        public async Task<ActionResult> RemoveTaxRateAsync(int id)
        {
            var taxRateToBeDelete = await _taxRateService.GetByIdAsync(id);

            if (taxRateToBeDelete == null)
            {
                return NotFound();
            }
            await _taxRateService.DeleteAsync(id);

            return NoContent();
        }
    }
}
