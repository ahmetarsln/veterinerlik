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
    public class SuppliersController : ControllerBase
    {
        private readonly ISupplierService _supplierService;
        private readonly IMapper _mapper;

        public SuppliersController(ISupplierService supplierService, IMapper mapper)
        {
            _supplierService = supplierService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetSuppliersAsync")]
        public async Task<ActionResult<List<SupplierDto>>> GetCompanysAsync()
        {
            var suppliers = await _supplierService.GetAllAsync();
            if (suppliers == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<SupplierDto>>(suppliers));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetSupplierByIdAsync")]
        public async Task<ActionResult<UserDto>> GetSupplierByIdAsync(int id)
        {
            var supplier = await _supplierService.GetByIdAsync(id);
            if (supplier == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<SupplierDto>(supplier));
        }
        // POST api/values
        [HttpPost(Name = "AddSupplierAsync")]
        public async Task<ActionResult<SupplierDto>> AddSupplierAsync(SupplierDto supplierDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var supplier = _mapper.Map<Supplier>(supplierDto);

            await _supplierService.AddAsync(supplier);
            return CreatedAtRoute("GetSupplierByIdAsync", new { id = supplier.Id }, _mapper.Map<SupplierDto>(supplier));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateSupplierAsync")]
        public async Task<ActionResult<SupplierDto>> UpdateSupplierAsync(int id, [FromBody] SupplierDto supplierDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != supplierDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _supplierService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var supplier = _mapper.Map<Supplier>(supplierDto);
            await _supplierService.UpdateAsync(supplier);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveSupplierAsync")]
        public async Task<ActionResult> RemoveSupplierAsync(int id)
        {
            var supplierToBeDelete = await _supplierService.GetByIdAsync(id);

            if (supplierToBeDelete == null)
            {
                return NotFound();
            }
            await _supplierService.DeleteAsync(id);

            return NoContent();
        }
    }
}
