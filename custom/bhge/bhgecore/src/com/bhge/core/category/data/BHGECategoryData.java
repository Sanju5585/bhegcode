/**
 *
 */
package com.bhge.core.category.data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import de.hybris.platform.commercefacades.product.data.CategoryData;


/**
 * @author 212695810
 *
 */
public class BHGECategoryData
{
	String code;
	String name;
	String categoryUrl;
	String categoryImageUrl;
	List<BHGECategoryData> categories = new ArrayList<BHGECategoryData>();
	@JsonIgnore
	int level;
	@JsonIgnore
	List<String> superCategories;
	@JsonIgnore
	Set<BHGECategoryData> level1s;
	@JsonIgnore
	Set<BHGECategoryData> level2s;
	@JsonIgnore
	Set<BHGECategoryData> level3s;
	@JsonIgnore
	Set<BHGECategoryData> level4s;
	@JsonIgnore
	Set<BHGECategoryData> level5s;
	@JsonIgnore
	Set<BHGECategoryData> level6s;

	Set<CategoryData> lvl1s;
	Set<CategoryData> lvl2s;
	Set<CategoryData> lvl3s;
	Set<CategoryData> lvl4s;
	Set<CategoryData> lvl5s;
	Set<CategoryData> lvl6s;

	public void setLvl1s(Set<CategoryData> lvl1s) {
		this.lvl1s = lvl1s;
	}

	public void setLvl2s(Set<CategoryData> lvl2s) {
		this.lvl2s = lvl2s;
	}

	public void setLvl3s(Set<CategoryData> lvl3s) {
		this.lvl3s = lvl3s;
	}

	public void setLvl4s(Set<CategoryData> lvl4s) {
		this.lvl4s = lvl4s;
	}

	public void setLvl5s(Set<CategoryData> lvl5s) {
		this.lvl5s = lvl5s;
	}

	public void setLvl6s(Set<CategoryData> lvl6s) {
		this.lvl6s = lvl6s;
	}


	/**
	 * @return the code
	 */
	public String getCode()
	{
		return code;
	}

	/**
	 * @param code
	 *           the code to set
	 */
	public void setCode(final String code)
	{
		this.code = code;
	}

	/**
	 * @return the name
	 */
	public String getName()
	{
		return name;
	}

	/**
	 * @param name
	 *           the name to set
	 */
	public void setName(final String name)
	{
		this.name = name;
	}

	/**
	 * @return the url
	 */
	public String getCategoryUrl()
	{
		return categoryUrl;
	}

	/**
	 * @param url
	 *           the url to set
	 */
	public void setCategoryUrl(final String categoryUrl)
	{
		this.categoryUrl = categoryUrl;
	}


	/**
	 * @return the categoryImageUrl
	 */
	public String getCategoryImageUrl()
	{
		return categoryImageUrl;
	}

	/**
	 * @param categoryImageUrl
	 *           the categoryImageUrl to set
	 */
	public void setCategoryImageUrl(final String categoryImageUrl)
	{
		this.categoryImageUrl = categoryImageUrl;
	}

	/**
	 * @return the superCategories
	 */
	public List<String> getSuperCategories()
	{
		return superCategories;
	}

	/**
	 * @return the list
	 */
	public List<BHGECategoryData> getCategories()
	{
		return categories;
	}

	/**
	 * @param list
	 *           the list to set
	 */
	public void setCategories(final List<BHGECategoryData> categories)
	{
		this.categories = categories;
	}

	/**
	 * @param superCategories
	 *           the superCategories to set
	 */
	public void setSuperCategories(final List<String> superCategories)
	{
		this.superCategories = superCategories;
	}

	public BHGECategoryData()
	{
		//Plain object
	}

	public BHGECategoryData(final String code, final String name, final List<String> superCategories, final int level)
	{
		this.code = code;
		this.name = name;
		this.superCategories = superCategories;
		this.level = level;
	}

	/**
	 * @param level1s
	 *           the level1s to set
	 */
	public void setLevel1s(final Set<BHGECategoryData> level1s)
	{
		this.level1s = level1s;
	}

	/**
	 * @param level2s
	 *           the level2s to set
	 */
	public void setLevel2s(final Set<BHGECategoryData> level2s)
	{
		this.level2s = level2s;
	}

	/**
	 * @param level3s
	 *           the level3s to set
	 */
	public void setLevel3s(final Set<BHGECategoryData> level3s)
	{
		this.level3s = level3s;
	}

	/**
	 * @param level4s
	 *           the level4s to set
	 */
	public void setLevel4s(final Set<BHGECategoryData> level4s)
	{
		this.level4s = level4s;
	}

	/**
	 * @param level5s
	 *           the level5s to set
	 */
	public void setLevel5s(final Set<BHGECategoryData> level5s)
	{
		this.level5s = level5s;
	}

	/**
	 * @param level5s
	 *           the level6s to set
	 */
	public void setLevel6s(final Set<BHGECategoryData> level6s)
	{
		this.level6s = level6s;
	}

	/**
	 * @return the level
	 */
	public int getLevel()
	{
		return level;
	}

	/**
	 * @param level
	 *           the level to set
	 */
	public void setLevel(final int level)
	{
		this.level = level;
	}

	public void setSubCategories(final BHGECategoryData main)
	{
		Set<BHGECategoryData> levels = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> mergedList;
		switch (main.getLevel())
		{
			case 2:
				levels = level1s;
				break;
			case 3:
				mergedList = new HashSet<BHGECategoryData>();
				mergedList.addAll(level1s);
				mergedList.addAll(level2s);
				levels = mergedList;
				break;
			case 4:
				mergedList = new HashSet<BHGECategoryData>();
				mergedList.addAll(level1s);
				mergedList.addAll(level2s);
				mergedList.addAll(level3s);
				levels = mergedList;
				break;
			case 5:
				mergedList = new HashSet<BHGECategoryData>();
				mergedList.addAll(level1s);
				mergedList.addAll(level2s);
				mergedList.addAll(level3s);
				mergedList.addAll(level4s);
				levels = mergedList;
				break;
			case 6:
				mergedList = new HashSet<BHGECategoryData>();
				mergedList.addAll(level1s);
				mergedList.addAll(level2s);
				mergedList.addAll(level3s);
				mergedList.addAll(level4s);
				mergedList.addAll(level5s);
				levels = mergedList;
				break;
		}
		for (final String sup : main.getSuperCategories())
		{
			for (final BHGECategoryData cat : levels)
			{
				final List<BHGECategoryData> list = cat.getCategories();
				if (cat.getCode().equalsIgnoreCase(sup))
				{
					list.add(main);
				}
			}
		}
	}



	public void setSubCategories(final CategoryData main)
	{
		Set<CategoryData> lvls = new HashSet<CategoryData>();
		final Set<CategoryData> mergedList;
		switch (main.getLevel())
		{
			case 2:
				lvls = lvl1s;
				break;
			case 3:
				mergedList = new HashSet<CategoryData>();
				mergedList.addAll(lvl1s);
				mergedList.addAll(lvl2s);
				lvls = mergedList;
				break;
			case 4:
				mergedList = new HashSet<CategoryData>();
				mergedList.addAll(lvl1s);
				mergedList.addAll(lvl2s);
				mergedList.addAll(lvl3s);
				lvls = mergedList;
				break;
			case 5:
				mergedList = new HashSet<CategoryData>();
				mergedList.addAll(lvl1s);
				mergedList.addAll(lvl2s);
				mergedList.addAll(lvl3s);
				mergedList.addAll(lvl4s);
				lvls = mergedList;
				break;
			case 6:
				mergedList = new HashSet<CategoryData>();
				mergedList.addAll(lvl1s);
				mergedList.addAll(lvl2s);
				mergedList.addAll(lvl3s);
				mergedList.addAll(lvl4s);
				mergedList.addAll(lvl5s);
				lvls = mergedList;
				break;
		}
		for (final String sup : main.getSuperCategories())
		{
			for (final CategoryData cat : lvls)
			{
				List<CategoryData> list = new ArrayList<CategoryData>();
				if(null != cat.getCategories())
				{
					list = cat.getCategories();
				}
				if (cat.getCode().equalsIgnoreCase(sup))
				{
					list.add(main);
					cat.setCategories(list);
				}
			}
		}
	}

	@JsonIgnore
	public Set<BHGECategoryData> getFinalList()
	{
		return this.level1s;
	}

	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((code == null) ? 0 : code.hashCode());
		return result;
	}

	@Override
	public boolean equals(final Object obj)
	{
		if (this == obj)
		{
			return true;
		}
		if (obj == null)
		{
			return false;
		}
		if (getClass() != obj.getClass())
		{
			return false;
		}
		final BHGECategoryData other = (BHGECategoryData) obj;
		if (code == null)
		{
			if (other.code != null)
			{
				return false;
			}
		}
		else if (!code.equals(other.code))
		{
			return false;
		}
		return true;
	}
}
