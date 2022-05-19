using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using murphy.vpo.API.DTOs;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyUnitsController : ControllerBase
    {
        private readonly ICurrencyUnitService _currencyUnitService;
        private readonly IMapper _mapper;

        public CurrencyUnitsController(ICurrencyUnitService currencyUnitService, IMapper mapper)
        {
            _currencyUnitService = currencyUnitService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetCurrencyUnitsAsync")]
        public async Task<ActionResult<List<CurrencyUnitDto>>> GetCompanysAsync()
        {
            var currencyUnits = await _currencyUnitService.GetAllAsync();
            if (currencyUnits == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<CurrencyUnitDto>>(currencyUnits));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetCurrencyUnitByIdAsync")]
        public async Task<ActionResult<UserDto>> GetCurrencyUnitByIdAsync(int id)
        {
            var currencyUnit = await _currencyUnitService.GetByIdAsync(id);
            if (currencyUnit == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<CurrencyUnitDto>(currencyUnit));
        }
        // POST api/values
        [HttpPost(Name = "AddCurrencyUnitAsync")]
        public async Task<ActionResult<CurrencyUnitDto>> AddCurrencyUnitAsync(CurrencyUnitDto currencyUnitDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var currencyUnit = _mapper.Map<CurrencyUnit>(currencyUnitDto);

            await _currencyUnitService.AddAsync(currencyUnit);
            return CreatedAtRoute("GetCurrencyUnitByIdAsync", new { id = currencyUnit.Id }, _mapper.Map<CurrencyUnitDto>(currencyUnit));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateCurrencyUnitAsync")]
        public async Task<ActionResult<CurrencyUnitDto>> UpdateCurrencyUnitAsync(int id, [FromBody] CurrencyUnitDto currencyUnitDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != currencyUnitDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _currencyUnitService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var currencyUnit = _mapper.Map<CurrencyUnit>(currencyUnitDto);
            await _currencyUnitService.UpdateAsync(currencyUnit);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveCurrencyUnitAsync")]
        public async Task<ActionResult> RemoveCurrencyUnitAsync(int id)
        {
            var currencyUnitToBeDelete = await _currencyUnitService.GetByIdAsync(id);

            if (currencyUnitToBeDelete == null)
            {
                return NotFound();
            }
            await _currencyUnitService.DeleteAsync(id);

            return NoContent();
        }
    }
}
