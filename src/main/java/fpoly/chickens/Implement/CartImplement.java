package fpoly.chickens.Implement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import fpoly.chickens.dao.CartDAO;
import fpoly.chickens.dao.StoreDAO;
import fpoly.chickens.dao.UserDAO;
import fpoly.chickens.entity.Cart;
import fpoly.chickens.entity.Store;
import fpoly.chickens.entity.User;
import fpoly.chickens.service.CartService;

@SessionScope
@Service
public class CartImplement implements CartService {

	@Autowired
	CartDAO cartDao;

	@Autowired
	UserDAO userDao;

	@Autowired
	StoreDAO storeDao;

	@Override
	public List<Cart> getCart(Integer storeid, Integer userid) {
		Store store = storeDao.findById(storeid).get();
		User user = userDao.findById(userid).get();
		List<Cart> list = cartDao.getCart(store, user);
		return list;
	}

	@Override
	public void add(JsonNode cartData) {
		ObjectMapper mapper = new ObjectMapper();
		Cart cart = mapper.convertValue(cartData, Cart.class);
		Cart cartExist = cartDao.checkProductInCart(cart.getUser(), cart.getProduct());
		if (cartExist != null) {
			cartExist.setAmount(cartExist.getAmount()+1);
			cartDao.saveAndFlush(cartExist);
		} else {
			cartDao.saveAndFlush(cart);
		}

	}
}
