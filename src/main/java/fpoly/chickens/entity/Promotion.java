package fpoly.chickens.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Promotion")
public class Promotion {

	@Id
	@Column(name = "Id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;

	@Column(name = "Name")
	private String Name;

	@ManyToOne
	@JoinColumn(name="Storeid")
	Store store;
	
	@Column(name = "Discount")
	private Double Discount;

	@Column(name = "Startdate")
	private Date StartDate;

	@Column(name = "Enddate")
	private Date EndDate;

	@Column(name = "Create_at")
	private Date Create_at;

	@Column(name = "Update_at")
	private Date Update_at;

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public Store getStore() {
		return store;
	}

	public void setStore(Store store) {
		this.store = store;
	}

	public Double getDiscount() {
		return Discount;
	}

	public void setDiscount(Double discount) {
		Discount = discount;
	}

	public Date getStartDate() {
		return StartDate;
	}

	public void setStartDate(Date startDate) {
		StartDate = startDate;
	}

	public Date getEndDate() {
		return EndDate;
	}

	public void setEndDate(Date endDate) {
		EndDate = endDate;
	}

	public Date getCreate_at() {
		return Create_at;
	}

	public void setCreate_at(Date create_at) {
		Create_at = create_at;
	}

	public Date getUpdate_at() {
		return Update_at;
	}

	public void setUpdate_at(Date update_at) {
		Update_at = update_at;
	}
	
	

}
