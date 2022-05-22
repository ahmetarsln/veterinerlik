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
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly IMapper _mapper;

        public CustomersController(ICustomerService customerService, IMapper mapper)
        {
            _customerService = customerService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetCustomersAsync")]
        public async Task<ActionResult<List<CustomerDto>>> GetCompanysAsync()
        {
            var customers = await _customerService.GetAllAsync();
            if (customers == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<CustomerDto>>(customers));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetCustomerByIdAsync")]
        public async Task<ActionResult<UserDto>> GetCustomerByIdAsync(int id)
        {
            var customer = await _customerService.GetByIdAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<CustomerDto>(customer));
        }
        // POST api/values
        [HttpPost(Name = "AddCustomerAsync")]
        public async Task<ActionResult<CustomerDto>> AddCustomerAsync(CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var customer = _mapper.Map<Customer>(customerDto);

            await _customerService.AddAsync(customer);
            return CreatedAtRoute("GetCustomerByIdAsync", new { id = customer.Id }, _mapper.Map<CustomerDto>(customer));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateCustomerAsync")]
        public async Task<ActionResult<CustomerDto>> UpdateCustomerAsync(int id, [FromBody] CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != customerDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _customerService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var customer = _mapper.Map<Customer>(customerDto);
            await _customerService.UpdateAsync(customer);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveCustomerAsync")]
        public async Task<ActionResult> RemoveCustomerAsync(int id)
        {
            var customerToBeDelete = await _customerService.GetByIdAsync(id);

            if (customerToBeDelete == null)
            {
                return NotFound();
            }
            await _customerService.DeleteAsync(id);

            return NoContent();
        }
    }
}
